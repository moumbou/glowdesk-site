/* Glowdesk website.
   1. French is written in the HTML; Arabic comes from the dictionary below.
   2. The latest release is read from the public releases repo, so the
      download button, version and changelog stay current without editing
      the site. Everything degrades gracefully when GitHub is unreachable. */
(function () {
  /* ------------------------------------------------------------------ */
  /* Settings you may edit                                               */
  /* ------------------------------------------------------------------ */
  var REPO = "moumbou/glowdesk-releases";
  // Fill these to show the "Une idée, une question ?" block. Leave empty to hide it.
  // WhatsApp: international format without "+" or spaces, e.g. "213555123456".
  var CONTACT = { whatsapp: "", email: "" };

  var API = "https://api.github.com/repos/" + REPO + "/releases";
  var STABLE = "https://github.com/" + REPO + "/releases/latest/download/Glowdesk-Setup.exe";
  var PAGE = "https://github.com/" + REPO + "/releases/latest";
  var SETUP_RE = /^Glowdesk_.*-setup\.exe$/;

  /* ------------------------------------------------------------------ */
  /* Arabic                                                              */
  /* ------------------------------------------------------------------ */
  var AR = {
    "nav.features": "المميزات",
    "nav.expiry": "الصلاحية",
    "nav.free": "مجاني",
    "nav.faq": "أسئلة",
    "nav.news": "الجديد",
    "nav.download": "تحميل",
    "hero.kicker": "لمحلات مستحضرات التجميل في الجزائر",
    "hero.title": "الجمال،<br><em>بتنظيم أنيق.</em>",
    "hero.lead": "يسيّر Glowdesk صندوقك ومنتجاتك وتواريخ صلاحيتها. مجاني، يعمل بدون إنترنت، بالعربية والفرنسية.",
    "cta.download": "التحميل لنظام Windows",
    "cta.latest": "آخر إصدار",
    "cta.meta": "مجاني · Windows 10 و11 · 64 بت",
    "cta.version": "الإصدار {v} · {date}",
    "cta.size": " · {size}",
    "float.expiry": "ينتهي بعد 12 يومًا",
    "float.sale": "تم تسجيل البيع",
    "strip.offline": "يعمل بدون إنترنت",
    "strip.lang": "العربية والفرنسية",
    "strip.pay": "نقدًا، CIB، الذهبية",
    "strip.print": "تذاكر 80 مم",
    "feat.kicker": "كل ما يلزم في الصندوق",
    "feat.title": "صُمّم لمحل حقيقي، لا لجدول بيانات",
    "feat.sub": "مئات المنتجات، ألوان متعددة، تواريخ تقترب، وعدة بائعات. Glowdesk يحفظ كل شيء في مكانه.",
    "f1.t": "صندوق سريع",
    "f1.p": "امسحي الباركود أو اكتبي ثلاثة أحرف. تخفيضات، الباقي للزبونة، تذكرة مطبوعة: عملية بيع في ثوانٍ.",
    "f2.t": "الألوان والأحجام",
    "f2.p": "كريم أساس واحد بعشرة ألوان. لكل نوع باركوده وسعره وسعر الجملة ومخزونه.",
    "f3.t": "الصلاحية دفعة بدفعة",
    "f3.p": "كل توريد يحتفظ بتاريخه. الصندوق يبيع أولًا الدفعة التي تنتهي أولًا، ويُنبّهك قبل فوات الأوان.",
    "f4.t": "الفريق ورموز PIN",
    "f4.p": "المالكة، المسيّرة، أمينة الصندوق. لكل واحدة رمز PIN ولا ترى إلا ما يخصها. أسعار الشراء تبقى خاصة.",
    "f5.t": "لوحة قيادة واضحة",
    "f5.p": "رقم أعمال اليوم، الهامش، الأكثر مبيعًا، المنتجات التي يجب إعادة طلبها. كل ما يهم في شاشة واحدة.",
    "f6.t": "نسخ احتياطي تلقائي",
    "f6.p": "نسخة كل يوم وقبل كل تحديث. انقطاع الكهرباء لا يُفقدك أي عملية بيع.",
    "exp.kicker": "الصلاحية",
    "exp.title": "لا منتج منتهي الصلاحية على الرفوف بعد اليوم",
    "exp.sub": "تواريخ الصلاحية تكلّف محلات التجميل كثيرًا. Glowdesk يتابعها لك، دفعة بدفعة.",
    "exp.l1": "<b>عند الاستلام</b>، تُدخلين تاريخ ورقم دفعة كل توريد.",
    "exp.l2": "<b>في الصندوق</b>، يبيع Glowdesk تلقائيًا الدفعة التي تنتهي أولًا.",
    "exp.l3": "<b>كل صباح</b>، تُظهر لوحة القيادة ما سينتهي قريبًا، لتطلقي تخفيضًا في الوقت المناسب.",
    "exp.b1": "منتهي الصلاحية",
    "exp.b2": "بعد 12 يومًا",
    "exp.b3": "بعد 33 يومًا",
    "exp.b4": "بعد 11 شهرًا",
    "win.stock": "المخزون والصلاحية",
    "win.pos": "الصندوق",
    "pos.kicker": "الصندوق",
    "pos.title": "عملية بيع في ثلاث حركات",
    "pos.sub": "صُمّم مع بائعات، للسرعة عندما يكون هناك طابور.",
    "pos.l1": "<b>امسحي</b> أو ابحثي بالاسم أو العلامة أو اللون.",
    "pos.l2": "<b>حصّلي</b> نقدًا أو ببطاقة CIB / الذهبية أو بالتحويل. الباقي يظهر بخط كبير.",
    "pos.l3": "<b>اطبعي</b> التذكرة على طابعتك الحرارية 80 مم.",
    "lang.kicker": "لغتك، أسلوبك",
    "lang.title": "بالعربية أو بالفرنسية، نهارًا أو ليلًا",
    "lang.sub": "غيّري اللغة بنقرة واحدة في أي وقت. العربية تُعرض من اليمين إلى اليسار كما ينبغي.",
    "lang.c1": "العربية",
    "lang.c1s": "واجهة كاملة من اليمين إلى اليسار",
    "lang.c2": "الوضع الداكن",
    "lang.c2s": "أريح للعين في المساء",
    "free.kicker": "مجاني",
    "free.title": "مجاني. حقًا.",
    "free.sub": "بدون اشتراك، بدون حد للمنتجات أو المبيعات. نطلب فقط تسجيل محلك مرة واحدة، لنُبقيك على اطلاع ونستمع لأفكارك.",
    "free.p1t": "كل الوظائف",
    "free.p1": "الصندوق، المخزون، الصلاحية، الفريق، لوحة القيادة، النسخ الاحتياطي: كل شيء مشمول، وسيبقى كذلك.",
    "free.p2t": "بياناتك عندك",
    "free.p2": "منتجاتك ومبيعاتك وزبوناتك تبقى على حاسوبك. لا يُرسل أي شيء إلى مكان آخر.",
    "free.p3t": "دائمًا محدّث",
    "free.p3": "الإصدارات الجديدة تُثبّت بنقرة واحدة، مع نسخة احتياطية تلقائية قبلها.",
    "dl.kicker": "تحميل",
    "dl.title": "جاهز في خمس دقائق",
    "dl.sub": "ثبّتي Glowdesk، اختاري اللغة، وجرّبيه بمنتجات تجريبية قبل إضافة منتجاتك.",
    "dl.req": "Windows 10 أو 11، 64 بت. قارئ باركود USB وطابعة حرارية اختياريان.",
    "dl.all": "كل الإصدارات",
    "dl.s1t": "حمّلي",
    "dl.s1": "الملف Glowdesk-Setup.exe، بضعة ميغابايت.",
    "dl.s2t": "ثبّتي",
    "dl.s2": "انقري مرتين على الملف. لا حاجة لصلاحيات المسؤول.",
    "dl.s3t": "افتحي محلك",
    "dl.s3": "المساعد يرشدك: اللغة، المحل، رمز PIN للمالكة.",
    "dl.note": "<b>قد يُظهر Windows رسالة « قام Windows بحماية الكمبيوتر ».</b> انقري على <i>مزيد من المعلومات</i> ثم <i>التشغيل على أي حال</i>. Glowdesk ليس لديه بعد شهادة مدفوعة، لكن الملف يأتي دائمًا من صفحتنا الرسمية.",
    "faq.kicker": "أسئلة",
    "faq.title": "ربما تتساءلين…",
    "q1": "هل يحتاج إلى الإنترنت؟",
    "a1": "لا. يعمل Glowdesk بالكامل بدون إنترنت. تحتاجينه مرة واحدة فقط لتسجيل محلك (مجانًا)، ثم من حين لآخر لاستلام التحديثات.",
    "q2": "هل هو مجاني حقًا؟",
    "a2": "نعم، بدون حد للمنتجات أو المبيعات أو المستخدمات. قد تأتي لاحقًا وحدات اختيارية (التوصيل، الولاء، النسخ عبر الإنترنت)، لكن كل ما هو مجاني اليوم سيبقى مجانيًا.",
    "q3": "أين بياناتي؟",
    "a3": "على حاسوبك، في ملف واحد، مع نسخة احتياطية تلقائية كل يوم. يمكنك استرجاع نسخة من الإعدادات بنقرة واحدة.",
    "q4": "ما المعدات اللازمة؟",
    "a4": "حاسوب بنظام Windows 10 أو 11. قارئ باركود USB وطابعة تذاكر 80 مم مستحسنان لكن غير إلزاميين.",
    "q5": "هل يمكن للبائعات رؤية هوامشي؟",
    "a5": "لا. لكل شخص دوره ورمز PIN الخاص به. أمينة الصندوق تُحصّل، لكنها لا ترى أسعار الشراء ولا الهوامش، ولا يمكنها تعديل الأسعار.",
    "q6": "هل يمكنني التجربة دون إدخال كل منتجاتي؟",
    "a6": "نعم. عند التثبيت، اختاري « مع منتجات تجريبية »: 24 منتجًا حقيقيًا مع دفعاتها وتواريخها وأسبوعين من المبيعات، لتجربة كل شيء براحة.",
    "ct.title": "فكرة أو سؤال؟",
    "ct.sub": "Glowdesk يتطور بملاحظاتك. راسلينا، نقرأ كل شيء.",
    "ct.email": "البريد الإلكتروني",
    "ft.privacy": "الخصوصية",
    "ft.license": "شروط الاستخدام",
    "alt.dashboard": "لوحة قيادة Glowdesk",
    "alt.stock": "الدفعات مرتبة حسب شهر انتهاء الصلاحية",
    "alt.pos": "شاشة الصندوق مع التذكرة الحالية",
    "alt.ar": "Glowdesk بالعربية",
    "alt.dark": "Glowdesk بالوضع الداكن",
    /* changelog page */
    "cl.title": "الجديد في Glowdesk",
    "cl.sub": "كل إصدار، بأحدثها أولًا. التطبيق يتحدث تلقائيًا، لا داعي لإعادة التحميل.",
    "cl.page": "صفحة الإصدار",
    "cl.download": "تحميل",
    "dlp.title": "التحميل يبدأ",
    "dlp.text": "إذا لم يحدث شيء، <a href=\"https://github.com/moumbou/glowdesk-releases/releases/latest/download/Glowdesk-Setup.exe\">انقري هنا لتحميل Glowdesk-Setup.exe</a>.",
    "dlp.back": "العودة إلى موقع Glowdesk"
  };
  var FR_EXTRA = {
    "cta.version": "Version {v} · {date}",
    "cta.size": " · {size}"
  };

  var lang = "fr";
  try {
    var q = new URLSearchParams(location.search).get("lang");
    lang = q || localStorage.getItem("glowdesk-lang") || ((navigator.language || "").indexOf("ar") === 0 ? "ar" : "fr");
  } catch (e) {}
  if (lang !== "ar") lang = "fr";

  function t(key, vars) {
    var s = lang === "ar" ? AR[key] : FR_EXTRA[key];
    if (s == null) return null;
    return s.replace(/\{(\w+)\}/g, function (_, k) { return vars && vars[k] != null ? vars[k] : ""; });
  }

  function applyLang() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    each("[data-i18n]", function (el) {
      if (el.dataset.fr == null) el.dataset.fr = el.innerHTML;
      var s = lang === "ar" ? AR[el.getAttribute("data-i18n")] : null;
      el.innerHTML = s != null ? s : el.dataset.fr;
    });
    each("[data-i18n-alt]", function (el) {
      if (el.dataset.frAlt == null) el.dataset.frAlt = el.alt;
      var s = lang === "ar" ? AR[el.getAttribute("data-i18n-alt")] : null;
      el.alt = s != null ? s : el.dataset.frAlt;
    });
    each("[data-src-ar]", function (el) {
      if (el.dataset.srcFr == null) el.dataset.srcFr = el.getAttribute("src");
      el.setAttribute("src", lang === "ar" ? el.getAttribute("data-src-ar") : el.dataset.srcFr);
    });
    each("[data-lang-toggle]", function (el) { el.textContent = lang === "ar" ? "Français" : "العربية"; });
    if (release) latest(release);
    if (releases) changelog(releases);
  }

  function each(sel, fn) {
    var els = document.querySelectorAll(sel);
    for (var i = 0; i < els.length; i++) fn(els[i]);
  }

  each("[data-lang-toggle]", function (el) {
    el.addEventListener("click", function () {
      lang = lang === "ar" ? "fr" : "ar";
      try { localStorage.setItem("glowdesk-lang", lang); } catch (e) {}
      applyLang();
    });
  });

  /* ------------------------------------------------------------------ */
  /* Releases                                                            */
  /* ------------------------------------------------------------------ */
  var release = null, releases = null;

  function fmtDate(iso) {
    try {
      return new Date(iso).toLocaleDateString(lang === "ar" ? "ar-DZ-u-nu-latn" : "fr-FR", { year: "numeric", month: "long", day: "numeric" });
    } catch (e) {
      return iso.slice(0, 10);
    }
  }
  function fmtSize(bytes) {
    return (bytes / 1048576).toFixed(1).replace(".", ",") + (lang === "ar" ? " م.ب" : " Mo");
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  /* Minimal markdown for release notes: headings, "- " bullets (with
     continuation lines), `code`, **bold**, paragraphs. */
  function md(text) {
    var lines = String(text || "").replace(/\r/g, "").split("\n");
    var out = [], list = [], inCode = false;
    function inline(s) {
      return esc(s).replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
    }
    function flush() {
      if (list.length) {
        out.push("<ul>" + list.map(function (l) { return "<li>" + inline(l) + "</li>"; }).join("") + "</ul>");
        list = [];
      }
    }
    lines.forEach(function (l) {
      if (/^```/.test(l)) { inCode = !inCode; return; }
      if (inCode) return; /* checksums block: not useful on the site */
      var m = /^(#{1,6})\s+(.*)$/.exec(l);
      if (m) { flush(); if (!/SHA-256/i.test(m[2])) out.push("<h4>" + inline(m[2]) + "</h4>"); return; }
      m = /^\s*[-*]\s+(.*)$/.exec(l);
      if (m) { list.push(m[1]); return; }
      if (list.length && /^\s+\S/.test(l)) { list[list.length - 1] += " " + l.trim(); return; }
      flush();
      if (l.trim()) out.push("<p>" + inline(l) + "</p>");
    });
    flush();
    return out.join("");
  }

  function setupOf(rel) {
    return (rel.assets || []).filter(function (a) { return SETUP_RE.test(a.name); })[0] || null;
  }

  function latest(rel) {
    var version = rel.tag_name.replace(/^v/, "");
    var setup = setupOf(rel);
    each("[data-version]", function (el) { el.textContent = "v" + version; });
    each("[data-download]", function (el) { el.href = setup ? setup.browser_download_url : STABLE; });
    each("[data-release-page]", function (el) { el.href = rel.html_url || PAGE; });
    each("[data-version-line]", function (el) {
      var line = (lang === "ar" ? AR : FR_EXTRA)["cta.version"].replace("{v}", version).replace("{date}", fmtDate(rel.published_at));
      if (setup) line += " · " + fmtSize(setup.size);
      el.textContent = line;
    });
  }

  function changelog(list) {
    var host = document.querySelector("[data-changelog]");
    if (!host || !list.length) return; /* keep the static list written into the page */
    var pageLabel = lang === "ar" ? AR["cl.page"] : "Page de la version";
    var dlLabel = lang === "ar" ? AR["cl.download"] : "Télécharger";
    host.innerHTML = list.map(function (rel) {
      var version = rel.tag_name.replace(/^v/, "");
      var exe = setupOf(rel);
      return (
        '<article class="release" id="v' + esc(version) + '">' +
        "<h3>Glowdesk " + esc(version) + ' <span class="date">' + esc(fmtDate(rel.published_at)) + "</span></h3>" +
        '<div class="body">' + md(rel.body) + "</div>" +
        '<p class="small"><a href="' + esc(rel.html_url) + '">' + pageLabel + "</a>" +
        (exe ? ' · <a href="' + esc(exe.browser_download_url) + '">' + dlLabel + " " + esc(version) + "</a>" : "") +
        "</p></article>"
      );
    }).join("");
  }

  /* Total installer downloads, shown only once it is worth showing. */
  function downloads(list) {
    var total = 0;
    list.forEach(function (rel) {
      (rel.assets || []).forEach(function (a) { if (/\.exe$/.test(a.name)) total += a.download_count || 0; });
    });
    each("[data-downloads]", function (el) {
      if (total < 100) { el.hidden = true; return; }
      el.hidden = false;
      el.textContent = " · " + total.toLocaleString("fr-FR") + (lang === "ar" ? " تحميل" : " téléchargements");
    });
  }

  /* ------------------------------------------------------------------ */
  /* Page details                                                        */
  /* ------------------------------------------------------------------ */
  function contact() {
    var box = document.querySelector("[data-contact]");
    if (!box || (!CONTACT.whatsapp && !CONTACT.email)) return;
    box.hidden = false;
    each("[data-contact-whatsapp]", function (el) {
      if (!CONTACT.whatsapp) return;
      el.hidden = false;
      el.href = "https://wa.me/" + CONTACT.whatsapp + "?text=" + encodeURIComponent("Bonjour, à propos de Glowdesk : ");
      el.target = "_blank";
      el.rel = "noopener";
    });
    each("[data-contact-email]", function (el) {
      if (!CONTACT.email) return;
      el.hidden = false;
      el.href = "mailto:" + CONTACT.email + "?subject=" + encodeURIComponent("Glowdesk");
    });
  }

  function reveal() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      for (var i = 0; i < els.length; i++) els[i].classList.add("in");
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    for (var j = 0; j < els.length; j++) io.observe(els[j]);
  }

  var header = document.querySelector(".top");
  function onScroll() { if (header) header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  each("[data-year]", function (el) { el.textContent = new Date().getFullYear(); });

  applyLang();
  contact();
  reveal();

  var wantLatest = document.querySelector("[data-version], [data-download]");
  var wantLog = document.querySelector("[data-changelog]");
  if (!wantLatest && !wantLog) return;

  fetch(API + "?per_page=30", { headers: { Accept: "application/vnd.github+json" } })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (data) {
      releases = (data || []).filter(function (r) { return !r.draft && !r.prerelease; });
      if (wantLog) changelog(releases);
      if (releases[0]) { release = releases[0]; latest(release); }
      downloads(releases);
    })
    .catch(function () { /* keep the static text and the stable download link */ });
})();
