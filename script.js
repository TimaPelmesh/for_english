(function () {
    'use strict';
  
    var currentLang = { value: 'en' };
    var THEME_KEY = 'neural-site-theme';
  
    function getTheme() {
      try {
        var saved = localStorage.getItem(THEME_KEY);
        if (saved === 'light' || saved === 'dark') return saved;
      } catch (e) {}
      return 'dark';
    }
    function applyTheme(theme) {
      var next = theme === 'light' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    }
    function toggleTheme() {
      var current = document.documentElement.getAttribute('data-theme') || 'dark';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    }
  
    // ----- Modal content (examples + concept) -----
    var modalContent = {
      images: {
        en: { title: 'Image generation & recognition', body: 'Neural networks create images from text and recognize objects, faces, and scenes in photos.', models: 'DALL·E, Midjourney, Stable Diffusion, Imagen, Flux.', spheres: 'Social networks, design, security, creative apps, advertising.' },
        ru: { title: 'Генерация и распознавание изображений', body: 'Нейросети создают изображения по тексту и распознают объекты, лица и сцены на фото.', models: 'DALL·E, Midjourney, Stable Diffusion, Imagen, Flux.', spheres: 'Соцсети, дизайн, безопасность, креативные приложения, реклама.' }
      },
      translators: {
        en: { title: 'Translators & language', body: 'Language models understand and generate text in many languages, powering translators and assistants.', models: 'GPT-4, Gemini, DeepSeek, Claude, LLaMA, Grok.', spheres: 'Translation, chatbots, search, writing, customer support, education.' },
        ru: { title: 'Переводчики и язык', body: 'Языковые модели понимают и генерируют текст на разных языках — основу переводчиков и помощников.', models: 'GPT-4, Gemini, DeepSeek, Claude, LLaMA, Grok.', spheres: 'Перевод, чат-боты, поиск, написание текстов, поддержка, образование.' }
      },
      voice: {
        en: { title: 'Voice assistants', body: 'Neural networks handle speech recognition and natural-sounding voice synthesis.', models: 'Whisper, Google Assistant, Siri, Alexa, Gemini, ChatGPT Voice.', spheres: 'Smart speakers, cars, accessibility, voice search, dictation.' },
        ru: { title: 'Голосовые помощники', body: 'Нейросети обеспечивают распознавание речи и естественный синтез голоса.', models: 'Whisper, Google Ассистент, Siri, Alexa, Gemini, ChatGPT Voice.', spheres: 'Умные колонки, авто, доступность, голосовой поиск, диктовка.' }
      },
      health: {
        en: { title: 'Healthcare & diagnosis', body: 'Neural networks analyze medical images and patient data to support diagnosis and treatment.', models: 'IBM Watson Health, PathAI, various research models for MRI/X-ray.', spheres: 'Radiology, pathology, drug discovery, patient monitoring, telemedicine.' },
        ru: { title: 'Медицина и диагностика', body: 'Нейросети анализируют снимки и данные пациентов для поддержки диагнозов и лечения.', models: 'IBM Watson Health, PathAI, исследовательские модели для МРТ/рентгена.', spheres: 'Радиология, патология, разработка лекарств, мониторинг, телемедицина.' }
      },
      concept: {
        en: {
          title: 'Models & application areas',
          intro: 'A short overview of well-known models and where neural networks are used.',
          modelsTitle: 'Popular neural network models',
          models: [
            { name: 'DeepSeek', desc: 'Large language model, coding and general tasks' },
            { name: 'Gemini', desc: 'Google\'s multimodal model (text, image, video)' },
            { name: 'GPT-4 / ChatGPT', desc: 'OpenAI language and reasoning model' },
            { name: 'Claude', desc: 'Anthropic assistant, long context' },
            { name: 'LLaMA', desc: 'Meta\'s open-weight language models' },
            { name: 'Grok', desc: 'xAI model, real-time knowledge' },
            { name: 'Mistral', desc: 'Efficient open models' },
            { name: 'Stable Diffusion', desc: 'Image generation' },
            { name: 'Whisper', desc: 'Speech recognition' }
          ],
          areasTitle: 'Application areas',
          areas: [
            { name: 'Language & translation', desc: 'Chatbots, translators, writing, search' },
            { name: 'Image & video', desc: 'Generation, editing, recognition' },
            { name: 'Voice', desc: 'Assistants, dictation, synthesis' },
            { name: 'Healthcare', desc: 'Diagnosis, drug discovery, patient data' },
            { name: 'Code', desc: 'Completion, refactoring, documentation' },
            { name: 'Autonomous systems', desc: 'Driving, drones, robotics' },
            { name: 'Finance', desc: 'Trading, fraud detection, risk' },
            { name: 'Education', desc: 'Tutoring, grading, personalized learning' }
          ]
        },
        ru: {
          title: 'Модели и сферы применения',
          intro: 'Краткий обзор известных моделей и сфер применения нейросетей.',
          modelsTitle: 'Популярные модели нейросетей',
          models: [
            { name: 'DeepSeek', desc: 'Языковая модель, код и общие задачи' },
            { name: 'Gemini', desc: 'Мультимодальная модель Google (текст, изображение, видео)' },
            { name: 'GPT-4 / ChatGPT', desc: 'Языковая модель и рассуждения OpenAI' },
            { name: 'Claude', desc: 'Ассистент Anthropic, длинный контекст' },
            { name: 'LLaMA', desc: 'Открытые языковые модели Meta' },
            { name: 'Grok', desc: 'Модель xAI, актуальные знания' },
            { name: 'Mistral', desc: 'Эффективные открытые модели' },
            { name: 'Stable Diffusion', desc: 'Генерация изображений' },
            { name: 'Whisper', desc: 'Распознавание речи' }
          ],
          areasTitle: 'Сферы применения',
          areas: [
            { name: 'Язык и перевод', desc: 'Чат-боты, переводчики, тексты, поиск' },
            { name: 'Изображение и видео', desc: 'Генерация, редактирование, распознавание' },
            { name: 'Голос', desc: 'Помощники, диктовка, синтез' },
            { name: 'Медицина', desc: 'Диагностика, разработка лекарств, данные пациентов' },
            { name: 'Код', desc: 'Дополнение, рефакторинг, документация' },
            { name: 'Автономные системы', desc: 'Автомобили, дроны, роботы' },
            { name: 'Финансы', desc: 'Торговля, мошенничество, риски' },
            { name: 'Образование', desc: 'Обучение, проверка работ, персонализация' }
          ]
        }
      }
    };
  
    // ----- Research links (science, articles, courses) -----
    var researchLinks = [
      {
        url: 'https://arxiv.org/list/cs.LG/recent',
        en: { title: 'arXiv (Machine Learning)', desc: 'Latest papers in machine learning and neural networks.' },
        ru: { title: 'arXiv (машинное обучение)', desc: 'Последние статьи по машинному обучению и нейросетям.' }
      },
      {
        url: 'https://distill.pub/',
        en: { title: 'Distill', desc: 'Clear explanations of machine learning concepts with interactive articles.' },
        ru: { title: 'Distill', desc: 'Понятные объяснения концепций машинного обучения с интерактивными статьями.' }
      },
      {
        url: 'https://www.nature.com/subjects/neural-networks',
        en: { title: 'Nature — Neural networks', desc: 'Scientific articles and research on neural networks.' },
        ru: { title: 'Nature — Нейросети', desc: 'Научные статьи и исследования по нейросетям.' }
      },
      {
        url: 'https://www.coursera.org/learn/neural-networks-deep-learning',
        en: { title: 'Coursera — Deep Learning', desc: 'Andrew Ng\'s course on neural networks and deep learning.' },
        ru: { title: 'Coursera — Глубокое обучение', desc: 'Курс Эндрю Ына по нейросетям и глубокому обучению.' }
      },
      {
        url: 'https://paperswithcode.com/',
        en: { title: 'Papers with Code', desc: 'Research papers with code implementations, sorted by task.' },
        ru: { title: 'Papers with Code', desc: 'Научные статьи с реализациями кода по задачам.' }
      }
    ];
  
    // ----- Language -----
    function applyLanguage(lang) {
      currentLang.value = lang;
      document.querySelectorAll('[data-en][data-ru]').forEach(function (el) {
        var text = el.getAttribute('data-' + lang);
        if (text != null) el.textContent = text;
      });
      document.querySelectorAll('.lang-btn').forEach(function (btn) {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
      });
      document.documentElement.lang = lang === 'ru' ? 'ru' : 'en';
      renderResearchGrid(lang);
    }
  
    function domainFromUrl(url) {
      try {
        var a = url.replace(/^https?:\/\//, '').split('/')[0];
        return a || url;
      } catch (e) { return url; }
    }
  
    function renderResearchGrid(lang) {
      var container = document.getElementById('researchGrid');
      if (!container) return;
      var l = lang || currentLang.value;
      container.innerHTML = researchLinks.map(function (item) {
        var t = item[l] || item.en;
        var displayUrl = domainFromUrl(item.url);
        return '<a href="' + item.url + '" target="_blank" rel="noopener noreferrer" class="research-card">' +
          '<span class="research-title">' + (t && t.title ? t.title : '') + '</span>' +
          '<span class="research-desc">' + (t && t.desc ? t.desc : '') + '</span>' +
          '<span class="research-url">' + displayUrl + '</span>' +
          '</a>';
      }).join('');
    }
  
    // (Hero visual is now pure SVG/CSS — no Three.js needed.)
  
    // ----- Signal demo: run animation -----
    var signalRunBtn = document.getElementById('signalRunBtn');
    var signalDiagram = document.getElementById('signalDiagram');
    if (signalRunBtn && signalDiagram) {
      signalRunBtn.addEventListener('click', function () {
        signalDiagram.classList.remove('signal-running');
        signalDiagram.offsetHeight;
        signalDiagram.classList.add('signal-running');
        setTimeout(function () {
          signalDiagram.classList.remove('signal-running');
        }, 2800);
      });
    }
  
    // ----- Modal -----
    var overlay = document.getElementById('modalOverlay');
    var modalTitle = document.getElementById('modalTitle');
    var modalBody = document.getElementById('modalBody');
    var modalClose = document.getElementById('modalClose');
  
    function openModal(exampleId) {
      var data = modalContent[exampleId];
      if (!data) return;
      var lang = currentLang.value;
      var content = data[lang] || data.en;
      modalTitle.textContent = content.title;
  
      if (exampleId === 'concept' && content.models && content.areas) {
        overlay.classList.add('modal--concept');
        modalBody.innerHTML =
          '<p class="modal-concept-intro">' + (content.intro || content.body || '') + '</p>' +
          '<div class="modal-concept-section">' +
          '<h4>' + content.modelsTitle + '</h4>' +
          '<ul class="modal-concept-list">' +
          content.models.map(function (m) {
            return '<li><strong>' + m.name + '</strong> <span>— ' + m.desc + '</span></li>';
          }).join('') +
          '</ul></div>' +
          '<div class="modal-concept-section">' +
          '<h4>' + content.areasTitle + '</h4>' +
          '<ul class="modal-concept-list">' +
          content.areas.map(function (a) {
            return '<li><strong>' + a.name + '</strong> <span>— ' + a.desc + '</span></li>';
          }).join('') +
          '</ul></div>';
      } else {
        overlay.classList.remove('modal--concept');
        var modelsLabel = lang === 'ru' ? 'Модели' : 'Models';
        var areasLabel = lang === 'ru' ? 'Сферы применения' : 'Areas';
        var html = '<p>' + content.body + '</p>';
        if (content.models) html += '<p class="modal-example-models"><strong>' + modelsLabel + ':</strong> ' + content.models + '</p>';
        if (content.spheres) html += '<p class="modal-example-spheres"><strong>' + areasLabel + ':</strong> ' + content.spheres + '</p>';
        modalBody.innerHTML = html;
      }
  
      overlay.setAttribute('aria-hidden', 'false');
      overlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  
    function closeModal() {
      overlay.setAttribute('aria-hidden', 'true');
      overlay.classList.remove('is-open');
      overlay.classList.remove('modal--concept');
      document.body.style.overflow = '';
    }
  
    document.querySelectorAll('.example-card').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = btn.getAttribute('data-example');
        if (id) openModal(id);
      });
    });
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', function (e) { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay && overlay.classList.contains('is-open')) closeModal();
    });
  
    // ----- Lang buttons -----
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang');
        if (lang) applyLanguage(lang);
      });
    });
  
    // ----- Theme toggle -----
    applyTheme(getTheme());
    var themeToggle = document.getElementById('themeToggle');
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  
    // ----- Mobile nav (drawer from right) -----
    var navToggle = document.getElementById('navToggle');
    var navDrawer = document.getElementById('navDrawer');
    var navOverlay = document.getElementById('navOverlay');
    function closeNavDrawer() {
      if (navDrawer) navDrawer.classList.remove('is-open');
      if (navOverlay) navOverlay.classList.remove('is-open');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    }
    function openNavDrawer() {
      if (navDrawer) navDrawer.classList.add('is-open');
      if (navOverlay) navOverlay.classList.add('is-open');
      if (navToggle) navToggle.setAttribute('aria-expanded', 'true');
    }
    if (navToggle && navDrawer) {
      navToggle.addEventListener('click', function () {
        var open = navDrawer.classList.toggle('is-open');
        if (navOverlay) navOverlay.classList.toggle('is-open', open);
        navToggle.setAttribute('aria-expanded', open);
      });
    }
    if (navOverlay) navOverlay.addEventListener('click', closeNavDrawer);
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      a.addEventListener('click', function () { closeNavDrawer(); });
    });
  
    // ----- Smooth scroll -----
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      var id = a.getAttribute('href');
      if (id === '#') return;
      a.addEventListener('click', function (e) {
        var target = document.querySelector(id);
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
      });
    });
  
    // ----- Init -----
    applyLanguage('en');
    renderResearchGrid('en');
  
    // Hero is static SVG/CSS now.
  })();