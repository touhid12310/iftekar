const { chromium } = require(process.env.PW || 'playwright');
const { spawn } = require('child_process');
const path = require('path');
(async () => {
  const mode = process.argv[2] || 'stills';
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
  await page.goto('file://' + path.resolve('promo.html'));
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(300);
  if (mode === 'stills') {
    for (const t of process.argv.slice(3).map(Number)) {
      await page.evaluate(t => render(t), t);
      await page.screenshot({ path: `still_${t}.png` });
    }
  } else {
    const fps = 30, dur = await page.evaluate(() => DURATION);
    const ff = spawn('./ffmpeg', ['-y','-loglevel','error','-f','image2pipe','-framerate',String(fps),'-c:v','mjpeg','-i','-',
      '-c:v','libx264','-pix_fmt','yuv420p','-crf','18','-preset','medium','video_silent.mp4'], { stdio: ['pipe','inherit','inherit'] });
    const n = Math.round(dur * fps);
    for (let i = 0; i < n; i++) {
      await page.evaluate(t => render(t), i / fps);
      const buf = await page.screenshot({ type: 'jpeg', quality: 95 });
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
      if (i % 150 === 0) console.log('frame', i, '/', n);
    }
    ff.stdin.end(); await new Promise(r => ff.on('close', r));
  }
  await browser.close();
})();
