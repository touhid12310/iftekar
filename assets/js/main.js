/* ==========================================================================
   Mohammad Habibur Rahman — site behaviour
   Bangla is the default language (written directly in index.html).
   English strings live in EN below; elements opt in with data-i18n="key"
   (inner HTML) or data-i18n-attr="attr:key;attr2:key2" (attributes).
   ========================================================================== */
(function () {
  "use strict";

  var EN = {
    "meta.title": "Mohammad Habibur Rahman | Engineer, Entrepreneur & Social Worker",
    "meta.description": "Mohammad Habibur Rahman — engineer, entrepreneur and social worker from Chattogram, working for a humane, prosperous and sustainable Bangladesh.",
    "a11y.skip": "Skip to main content",
    "a11y.mainNav": "Main menu",
    "a11y.lang": "Choose language",
    "a11y.menu": "Open menu",

    "brand.name": "Mohammad Habibur Rahman",
    "brand.tagline": "Engineer | Entrepreneur | Social Worker",

    "nav.home": "Home",
    "nav.about": "About",
    "nav.business": "Businesses",
    "nav.social": "Social Work",
    "nav.gallery": "Gallery",
    "nav.blog": "Blog",
    "nav.video": "Videos",
    "nav.news": "News",
    "nav.contact": "Contact",
    "search.placeholder": "Search...",
    "search.label": "Search this site",
    "header.cta": "Contact Me",

    "hero.kicker": "People • Business • Possibility",
    "hero.name1": "Mohammad",
    "hero.name2": "Habibur Rahman",
    "hero.roles": "Engineer | Entrepreneur | Social Worker",
    "hero.desc": "Working together for a humane, prosperous<br>and sustainable Bangladesh",
    "hero.quote": "“Success becomes meaningful only when we create value for people.”",
    "hero.quoteBy": "— Mohammad Habibur Rahman",
    "hero.btnAbout": "Know About Me",
    "hero.btnProfile": "Download Profile",
    "hero.dream": "From Chattogram,<br>dreaming of a<br>developed<br>Bangladesh...",
    "hero.tile1": "Entrepreneur",
    "hero.tile2": "Innovation",
    "hero.tile3": "Social Worker",
    "hero.tile4": "Lifelong Learner",

    "about.title": "About Me",
    "about.subtitle": "For learning, work, people and society",
    "about.p1": "I am Mohammad Habibur Rahman — an engineer, entrepreneur and socially driven professional. My journey began in Damdama village of Lelang Union, Fatikchhari Upazila, Chattogram. I earned a bachelor’s degree in Computer Engineering and a Professional MBA in Management Information Systems (MIS). By bringing together technology, business and social development, I work to build a sustainable and prosperous society.",
    "about.p2": "I believe that enterprise, innovation, human values and social responsibility are the foundation of a developed Bangladesh.",
    "about.btnMore": "Read More",
    "about.btnJourney": "Watch My Journey",
    "info.village.title": "Home Village",
    "info.village.text": "Damdama, Lelang Union<br>Fatikchhari, Chattogram, Bangladesh",
    "info.family.title": "Family",
    "info.family.text": "Married, 2 children",
    "info.edu.title": "Education",
    "info.edu.text": "B.Sc. (Computer Engineering)<br>Professional MBA in MIS",
    "info.job.title": "Profession",
    "info.job.text": "Engineer, Entrepreneur<br>Business Professional",
    "info.passion.title": "Passions",
    "info.passion.text": "People, Innovation<br>Sustainable Development",

    "ms.title": "Key Milestones of My Life",
    "ms.link": "View Full Timeline",
    "ms.1": "Born and raised<br>in Damdama village",
    "ms.2": "Graduated in<br>Computer Engineering",
    "ms.3": "Professional<br>MBA in MIS",
    "ms.4": "Started the journey<br>as an entrepreneur",
    "ms.5": "Built business<br>ventures",
    "ms.6": "Engaged in<br>social work",
    "ms.7": "Hope for a<br>developed Bangladesh",

    "biz.title": "Business Ventures",
    "biz.subtitle": "Innovative business for a sustainable future",
    "biz.all": "View All Businesses",
    "biz.more": "View Details",
    "biz.1.role": "Director",
    "biz.1.desc": "A better future through<br>technology-driven solutions.",
    "biz.2.role": "Proprietor",
    "biz.2.desc": "New possibilities through<br>trusted trade.",
    "biz.3.role": "Director",
    "biz.3.desc": "Sustainable development through<br>bamboo, environment and eco-tourism.",
    "biz.4.role": "Proprietor",
    "biz.4.desc": "New horizons in<br>global trade.",

    "social.title": "Social & Professional Engagement",
    "social.subtitle": "A collective effort to build a better society",
    "social.all": "View All Activities",
    "social.1.name": "Chittagong Chamber of Commerce & Industry",
    "social.1.role": "Member",
    "social.1.desc": "Working for a stronger economy.",
    "social.2.name": "Chatga Bhasha Parishad",
    "social.2.role": "Executive Member",
    "social.2.desc": "Preserving and promoting the language and culture of Chattogram.",
    "social.3.name": "Eco Foundation",
    "social.3.role": "Founding Member",
    "social.3.desc": "For a green, healthy and sustainable planet.",
    "social.4.name": "Lions Club",
    "social.4.role": "Member",
    "social.4.desc": "Serving people and striving for positive change.",

    "stats.label": "At a glance",
    "stats.1": "Business Ventures",
    "stats.2": "Professional Bodies",
    "stats.3": "Commitment to Society",
    "stats.4": "<small>Goal</small>A Developed Bangladesh",
    "stats.quote": "“Only by working together can we build a humane, prosperous and sustainable Bangladesh”",

    "gallery.title": "Photo Gallery",
    "gallery.subtitle": "Moments from my journey",
    "gallery.all": "View All Photos",
    "gallery.alt.seminar": "Seminar",
    "gallery.alt.planting": "Tree plantation programme",
    "gallery.alt.talk": "Discussion session",
    "gallery.alt.bamboo": "Bamboo grove",
    "gallery.alt.sapling": "Sapling in hand",

    "video.title": "Video Gallery",
    "video.subtitle": "My thoughts, work and initiatives",
    "video.all": "View All Videos",
    "video.1": "Dream of a Developed Bangladesh",
    "video.2": "The Promise of Bamboo – Green Future",
    "video.3": "Entrepreneurship & Innovation",
    "video.4": "Social Activities",
    "video.5": "A Message for the Youth",
    "video.soon": "This video will be available soon.",

    "blog.title": "Blog & Articles",
    "blog.subtitle": "Thoughts, ideas and experiences",
    "blog.all": "View All Articles",
    "blog.1.title": "The Future Potential of Bamboo in Bangladesh",
    "blog.1.date": "22 July 2024",
    "blog.2.title": "How Technology Changes Our Lives",
    "blog.2.date": "12 June 2024",
    "blog.3.title": "Challenges and Opportunities of Entrepreneurship",
    "blog.3.date": "15 May 2024",
    "blog.4.title": "A Green Bangladesh Is Our Responsibility",
    "blog.4.date": "20 April 2024",
    "blog.5.title": "Leadership and Social Responsibility",
    "blog.5.date": "05 March 2024",

    "t.title": "What People Say",
    "t.subtitle": "Kind words from colleagues, partners and well-wishers",
    "t.all": "View All Testimonials",
    "t.1.text": "A visionary leader with deep humanity and a strong sense of social responsibility.",
    "t.1.by": "— Business Partner",
    "t.2.text": "Always sincere about the development of society and the welfare of people.",
    "t.2.by": "— Colleague",
    "t.3.text": "An inspiring figure for the youth.",
    "t.3.by": "— Community Member",

    "cta.title": "Let’s Work Together",
    "cta.subtitle": "For a humane, prosperous and sustainable Bangladesh",
    "cta.text": "I am keen to work with you on new opportunities,<br>partnerships and innovative initiatives.",
    "cta.btn": "Get in Touch",

    "footer.about": "Creating opportunities for people<br>Contributing to society<br>Hoping for a developed Bangladesh",
    "footer.links": "Quick Links",
    "footer.contact": "Contact Information",
    "footer.address": "Damdama, Lelang Union,<br>Fatikchhari, Chattogram, Bangladesh",
    "footer.linkedin": "Connect on LinkedIn",
    "footer.facebook": "Follow on Facebook",
    "footer.youtube": "Subscribe on YouTube",
    "footer.follow": "Follow Me",
    "footer.signature": "“People<br>Possibility<br>Progress”",
    "footer.copy": "Mohammad Habibur Rahman. All rights reserved.",
    "footer.madeFor": "For Bangladesh, for the people",

    "modal.photo": "Photo",
    "modal.close": "Close",
    "modal.prev": "Previous photo",
    "modal.next": "Next photo"
  };

  // Bangla strings that only JavaScript needs (everything else is read from the page).
  var BN_EXTRA = {
    "video.soon": "ভিডিওটি শীঘ্রই যুক্ত করা হবে।"
  };

  var STORAGE_KEY = "site-lang";
  var BN_DIGITS = "০১২৩৪৫৬৭৮৯";
  var root = document.documentElement;
  var currentLang = "bn";

  function toBnDigits(value) {
    return String(value).replace(/\d/g, function (d) { return BN_DIGITS[d]; });
  }

  function t(key) {
    if (currentLang === "en" && EN[key] != null) return EN[key];
    return BN_EXTRA[key] || "";
  }

  /* ---------- Language ---------- */
  var textNodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  var attrNodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n-attr]"));

  textNodes.forEach(function (el) { el._bn = el.innerHTML; });
  attrNodes.forEach(function (el) {
    el._bnAttr = {};
    el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
      var attr = pair.split(":")[0].trim();
      el._bnAttr[attr] = el.getAttribute(attr);
    });
  });

  function applyLang(lang) {
    currentLang = lang === "en" ? "en" : "bn";
    var en = currentLang === "en";
    root.lang = currentLang;

    textNodes.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      el.innerHTML = en && EN[key] != null ? EN[key] : el._bn;
    });
    attrNodes.forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var parts = pair.split(":");
        var attr = parts[0].trim();
        var key = (parts[1] || "").trim();
        el.setAttribute(attr, en && EN[key] != null ? EN[key] : el._bnAttr[attr]);
      });
    });

    document.querySelectorAll("[data-year]").forEach(function (el) {
      var year = new Date().getFullYear();
      el.textContent = en ? year : toBnDigits(year);
    });

    document.querySelectorAll(".lang-switch [data-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === currentLang));
    });

    try { localStorage.setItem(STORAGE_KEY, currentLang); } catch (e) { /* storage unavailable */ }
  }

  function initialLang() {
    var fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (fromUrl === "en" || fromUrl === "bn") return fromUrl;
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "bn") return saved;
    } catch (e) { /* storage unavailable */ }
    return "bn";
  }

  document.querySelectorAll(".lang-switch [data-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () { applyLang(btn.getAttribute("data-lang")); });
  });

  applyLang(initialLang());

  /* ---------- Header: shadow on scroll + mobile menu ---------- */
  var header = document.querySelector(".site-header");
  var menuToggle = document.querySelector(".menu-toggle");

  function onScroll() { header.classList.toggle("is-scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    header.classList.toggle("nav-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
  }
  menuToggle.addEventListener("click", function () { setMenu(!header.classList.contains("nav-open")); });
  document.querySelectorAll(".main-nav a").forEach(function (a) {
    a.addEventListener("click", function () { setMenu(false); });
  });
  document.addEventListener("click", function (e) {
    if (header.classList.contains("nav-open") && !header.contains(e.target)) setMenu(false);
  });

  /* ---------- Active nav link while scrolling ---------- */
  var spyLinks = {};
  document.querySelectorAll(".main-nav a[data-spy]").forEach(function (a) { spyLinks[a.getAttribute("data-spy")] = a; });
  var sections = Array.prototype.slice.call(document.querySelectorAll("[data-section]"));

  function updateActive() {
    var offset = header.offsetHeight + 90;
    var current = sections[0] && sections[0].id;
    sections.forEach(function (s) {
      if (s.getBoundingClientRect().top - offset <= 0) current = s.id;
    });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = "contact";
    Object.keys(spyLinks).forEach(function (id) { spyLinks[id].classList.toggle("active", id === current); });
  }
  window.addEventListener("scroll", updateActive, { passive: true });
  updateActive();

  /* ---------- In-page search ---------- */
  var searchForm = document.getElementById("site-search");
  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var q = searchForm.q.value.trim().toLowerCase();
      if (!q) return;
      var candidates = document.querySelectorAll("main h1, main h2, main h3, main p, main blockquote, main figcaption, main .video-title, footer h3, footer li");
      for (var i = 0; i < candidates.length; i++) {
        var el = candidates[i];
        if (el.offsetParent !== null && el.textContent.toLowerCase().indexOf(q) !== -1) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.classList.remove("search-hit");
          void el.offsetWidth; // restart the highlight animation
          el.classList.add("search-hit");
          return;
        }
      }
      searchForm.classList.add("not-found");
      setTimeout(function () { searchForm.classList.remove("not-found"); }, 900);
    });
  }

  /* ---------- Modals (shared) ---------- */
  var lastFocus = null;

  function openModal(modal) {
    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.classList.add("modal-open");
    var closeBtn = modal.querySelector("[data-close]");
    if (closeBtn) closeBtn.focus();
  }

  function closeModal(modal) {
    modal.hidden = true;
    document.body.classList.remove("modal-open");
    if (modal === videoModal) videoFrame.innerHTML = "";
    if (lastFocus) lastFocus.focus();
  }

  document.querySelectorAll(".modal").forEach(function (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal || e.target.closest("[data-close]")) closeModal(modal);
    });
  });

  /* ---------- Photo lightbox ---------- */
  var lightbox = document.getElementById("lightbox");
  var lbImg = lightbox.querySelector("img");
  var lbCount = lightbox.querySelector(".lb-count");
  var photos = Array.prototype.slice.call(document.querySelectorAll("[data-lightbox]"));
  var photoIndex = 0;

  function showPhoto(i) {
    photoIndex = (i + photos.length) % photos.length;
    var link = photos[photoIndex];
    lbImg.src = link.getAttribute("href");
    lbImg.alt = link.querySelector("img").alt;
    var n = (photoIndex + 1) + " / " + photos.length;
    lbCount.textContent = currentLang === "en" ? n : toBnDigits(n);
  }

  photos.forEach(function (link, i) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      showPhoto(i);
      openModal(lightbox);
    });
  });
  lightbox.querySelector(".lb-prev").addEventListener("click", function () { showPhoto(photoIndex - 1); });
  lightbox.querySelector(".lb-next").addEventListener("click", function () { showPhoto(photoIndex + 1); });

  var openGallery = document.querySelector('[data-action="open-gallery"]');
  if (openGallery) openGallery.addEventListener("click", function () { showPhoto(0); openModal(lightbox); });

  /* ---------- Video player ---------- */
  var videoModal = document.getElementById("video-modal");
  var videoFrame = videoModal.querySelector(".video-frame");
  var videoTitle = videoModal.querySelector(".video-modal-title");

  function openVideo(n) {
    var card = document.querySelector('.video-card[data-video="' + n + '"]');
    if (!card) return;
    var id = (card.getAttribute("data-youtube") || "").trim();
    videoTitle.textContent = card.querySelector(".video-title").textContent;
    videoFrame.innerHTML = "";
    if (id) {
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(id) + "?autoplay=1&rel=0";
      iframe.title = videoTitle.textContent;
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      videoFrame.appendChild(iframe);
    } else {
      var poster = document.createElement("img");
      poster.src = card.querySelector("img").src;
      poster.alt = "";
      var note = document.createElement("p");
      note.className = "video-soon";
      note.textContent = t("video.soon");
      videoFrame.appendChild(poster);
      videoFrame.appendChild(note);
    }
    openModal(videoModal);
  }

  document.querySelectorAll("[data-video]").forEach(function (el) {
    el.addEventListener("click", function () { openVideo(el.getAttribute("data-video")); });
  });

  /* ---------- Keyboard ---------- */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (!lightbox.hidden) closeModal(lightbox);
      else if (!videoModal.hidden) closeModal(videoModal);
      else if (header.classList.contains("nav-open")) { setMenu(false); menuToggle.focus(); }
    }
    if (!lightbox.hidden) {
      if (e.key === "ArrowLeft") showPhoto(photoIndex - 1);
      if (e.key === "ArrowRight") showPhoto(photoIndex + 1);
    }
  });

  /* ---------- "Download profile": print / save as PDF ---------- */
  document.querySelectorAll('[data-action="print-profile"]').forEach(function (btn) {
    btn.addEventListener("click", function () { window.print(); });
  });
})();
