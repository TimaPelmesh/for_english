(function () {
  'use strict';

  var currentLang = { value: 'en' };

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

  // ----- Three.js: hero neural net (nodes + edges + pulse animation) -----
  function createNeuralScene(container, options) {
    if (typeof THREE === 'undefined') return null;
    var opts = options || {};
    var width = container.clientWidth;
    var height = container.clientHeight;
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0d0f14);
    var camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 1000);
    camera.position.z = 11;
    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    if (opts.canvasClass) renderer.domElement.className = opts.canvasClass;
    container.appendChild(renderer.domElement);

    var nodeGeom = new THREE.SphereGeometry(0.14, 20, 14);
    var edgeGeom = new THREE.CylinderGeometry(0.018, 0.018, 1, 8);
    var matBlue = new THREE.MeshBasicMaterial({ color: 0x3b82f6 });
    var matGlow = new THREE.MeshBasicMaterial({ color: 0x60a5fa });
    var matEdge = new THREE.MeshBasicMaterial({ color: 0x475569, transparent: true, opacity: 0.6 });

    var layers = opts.layers || [4, 6, 8, 6, 4];
    var nodes = [];
    var nodeMeshes = [];
    var layerStarts = [];
    var layerStep = 2;
    var startX = -(layers.length - 1) * layerStep / 2;
    var idx = 0;

    for (var L = 0; L < layers.length; L++) {
      layerStarts.push(idx);
      var n = layers[L];
      var x = startX + L * layerStep;
      for (var i = 0; i < n; i++) {
        var y = (i - (n - 1) / 2) * 0.45;
        var z = (Math.random() - 0.5) * 0.4;
        nodes.push({ x: x, y: y, z: z });
        var mesh = new THREE.Mesh(nodeGeom, matBlue.clone());
        mesh.position.set(x, y, z);
        mesh.userData.baseY = y;
        mesh.userData.baseScale = 1;
        scene.add(mesh);
        nodeMeshes.push(mesh);
        idx++;
      }
    }

    var edgeMeshes = [];
    var prevStart = 0;
    for (var l = 0; l < layers.length - 1; l++) {
      var a = layers[l];
      var b = layers[l + 1];
      for (var i = 0; i < a; i++) {
        for (var j = 0; j < b; j++) {
          var from = nodes[prevStart + i];
          var to = nodes[prevStart + a + j];
          var edge = new THREE.Mesh(edgeGeom, matEdge.clone());
          var midX = (from.x + to.x) / 2, midY = (from.y + to.y) / 2, midZ = (from.z + to.z) / 2;
          var dx = to.x - from.x, dy = to.y - from.y, dz = to.z - from.z;
          var len = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1;
          edge.scale.y = len;
          edge.position.set(midX, midY, midZ);
          var dir = new THREE.Vector3(dx, dy, dz).normalize();
          var axis = new THREE.Vector3(0, 1, 0);
          edge.quaternion.setFromUnitVectors(axis, dir);
          scene.add(edge);
          edgeMeshes.push(edge);
        }
      }
      prevStart += a;
    }

    var clock = new THREE.Clock();
    var pulseStart = -999;
    var PULSE_INTERVAL = 3.2;
    var PULSE_DURATION = 1.4;

    function runPulse() {
      pulseStart = clock.getElapsedTime();
    }

    function animate() {
      if (!renderer.domElement.isConnected) return;
      var t = clock.getElapsedTime();
      if (opts.rotate) {
        var r = 11;
        camera.position.x = r * Math.sin(t * 0.18);
        camera.position.z = r * Math.cos(t * 0.18);
        camera.lookAt(0, 0, 0);
        if (t - pulseStart > PULSE_INTERVAL) runPulse();
      }
      var pulseT = t - pulseStart;
      layerStarts.forEach(function (start, layerIndex) {
        var count = layers[layerIndex];
        var layerTime = layerIndex * 0.12;
        for (var i = 0; i < count; i++) {
          var mesh = nodeMeshes[start + i];
          var nodeT = pulseT - layerTime - i * 0.03;
          var active = nodeT > 0 && nodeT < PULSE_DURATION;
          var fade = active ? Math.sin((nodeT / PULSE_DURATION) * Math.PI) : 0;
          if (mesh.material) {
            mesh.material.color.setHex(fade > 0.3 ? 0x60a5fa : 0x3b82f6);
          }
          var scale = 1 + fade * 0.35;
          mesh.scale.setScalar(scale);
        }
      });
      nodeMeshes.forEach(function (m, i) {
        var baseY = m.userData.baseY !== undefined ? m.userData.baseY : nodes[i].y;
        m.position.y = baseY + Math.sin(t + i * 0.25) * 0.05;
      });
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    runPulse();
    animate();

    var resizer = function () {
      var w = container.clientWidth;
      var h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', resizer);

    return {
      scene: scene,
      camera: camera,
      renderer: renderer,
      resize: resizer
    };
  }

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

  var heroThreeWrap = document.getElementById('heroThreeWrap');
  if (heroThreeWrap && typeof THREE !== 'undefined') {
    createNeuralScene(heroThreeWrap, { layers: [4, 6, 8, 6, 4], canvasClass: 'hero-canvas', rotate: true });
  }
})();
