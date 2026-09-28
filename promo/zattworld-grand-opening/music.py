import numpy as np, wave
SR=44100; DUR=30.0; N=int(SR*DUR); t=np.arange(N)/SR
out=np.zeros((N,2))
rng=np.random.default_rng(3)
def midi(m): return 440*2**((m-69)/12)
def add(sig,start,pan=0.0,gain=1.0):
    i=int(start*SR)
    if i>=N: return
    j=min(N,i+len(sig)); s=sig[:j-i]*gain
    out[i:j,0]+=s*min(1,1-pan); out[i:j,1]+=s*min(1,1+pan)
def env(n,a,d,sus=None):
    x=np.arange(n)/SR; e=np.minimum(1,x/max(a,1e-4))*np.exp(-x/d)
    return e
def bell(f,dur=1.6):
    n=int(dur*SR); x=np.arange(n)/SR
    s=(np.sin(2*np.pi*f*x)+0.35*np.sin(2*np.pi*2.0*f*x)*np.exp(-x*3)+0.18*np.sin(2*np.pi*3.01*f*x)*np.exp(-x*5))
    return s*env(n,0.004,0.45)
def pad(freqs,dur):
    n=int(dur*SR); x=np.arange(n)/SR; s=np.zeros(n)
    for f in freqs:
        for d in (-0.25,0.25): s+=np.sin(2*np.pi*(f+d)*x)+0.3*np.sin(2*np.pi*2*(f+d)*x)
    a=np.minimum(1,x/0.6)*np.minimum(1,(dur-x)/0.6)
    return s*a/len(freqs)
def kick(dur=0.35):
    n=int(dur*SR); x=np.arange(n)/SR; f=45+90*np.exp(-x*30)
    return np.sin(2*np.pi*np.cumsum(f)/SR)*np.exp(-x*9)
def hat(dur=0.06):
    n=int(dur*SR); x=np.arange(n)/SR; s=rng.standard_normal(n); s=np.diff(s,prepend=0)
    return s*np.exp(-x*60)
def whoosh(dur=0.9,up=True):
    n=int(dur*SR); x=np.arange(n)/SR; s=rng.standard_normal(n)
    k=np.ones(40)/40; s=np.convolve(s,k,'same'); s=s-np.convolve(s,np.ones(400)/400,'same')
    e=np.sin(np.pi*x/dur)**2
    return s*e*6
def chime(dur=2.5):
    n=int(dur*SR); s=np.zeros(n)
    for k,m in enumerate([86,90,93,98,102,105]):
        b=bell(midi(m),dur-k*0.07); i=int(k*0.07*SR); s[i:i+len(b)]+=b*0.5
    return s
BPM=120; beat=60/BPM; bar=4*beat
# D  A  Bm  G  (I V vi IV)
prog=[[62,66,69],[57,61,64],[59,62,66],[55,59,62]]
bass=[38,33,35,31]
start_music=2.8
# intro: soft swell + shimmer
add(pad([midi(m) for m in prog[0]],3.0),0.0,gain=0.10)
for k,tt in enumerate([0.15,0.45,0.95,1.4]): add(bell(midi([74,78,81,86][k]),1.6),tt,gain=0.18,pan=[-.4,.4,-.2,.2][k])
add(whoosh(1.2),1.9,gain=0.08)
add(chime(),2.9,gain=0.35)
nb=int((DUR-start_music)/bar)+1
for b in range(nb):
    t0=start_music+b*bar; ch=prog[b%4]
    if t0>=DUR: break
    add(pad([midi(m) for m in ch],bar+0.6),t0,gain=0.13)
    # bass
    for q in range(4):
        tb=t0+q*beat
        if tb<DUR-0.3:
            n=int(beat*SR); x=np.arange(n)/SR
            add(np.sin(2*np.pi*midi(bass[b%4])*x)*np.exp(-x*4),tb,gain=0.22)
    # arpeggio 8ths
    arp=[ch[0]+12,ch[1]+12,ch[2]+12,ch[1]+12,ch[0]+24,ch[2]+12,ch[1]+12,ch[2]+12]
    for q,m in enumerate(arp):
        tb=t0+q*beat/2
        if tb<DUR-0.4: add(bell(midi(m),1.0),tb,gain=0.11,pan=(-0.5 if q%2 else 0.5))
    # drums from GRAND slam onwards
    if t0>=3.9:
        for q in range(4):
            tb=t0+q*beat
            add(kick(),tb,gain=0.55)
            add(hat(),tb+beat/2,gain=0.05,pan=0.3)
# impacts / whooshes at scene changes
for ts in [3.95,9.35,13.75,17.95,22.95,27.15]:
    add(whoosh(0.7),ts-0.45,gain=0.07)
for ts in [4.0,27.2]:
    add(chime(2.2),ts,gain=0.25)
# master
fade=np.minimum(1,(DUR-t)/1.8); out*=fade[:,None]
out/=np.max(np.abs(out))*1.12
out=np.tanh(out*1.2)/np.tanh(1.2)*0.85
pcm=(out*32767).astype(np.int16)
with wave.open('music.wav','wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR); w.writeframes(pcm.tobytes())
print('ok')
