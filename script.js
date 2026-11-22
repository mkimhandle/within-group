/* Within Group — interactions
   1. Theme toggle (system default, remembered per visitor)
   2. Hero screening field: a loan tape filtered by the buy box, resolving into the mark
   3. Header state, buy-box frame, seller tabs, process progress
*/
(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var W_POINTS = {"aspect":1.6432748538011697,"pal":["#30a8d8","#304890","#3060a8","#306090","#1878c0","#1890c0","#304878","#303078","#1878a8","#3090d8","#1860a8","#3090c0"],"p":[476,15,2,495,15,2,514,15,10,532,15,10,439,46,3,458,46,2,476,46,2,495,46,2,514,46,2,532,46,10,551,46,8,9,77,1,28,77,1,47,77,1,65,77,1,439,77,3,458,77,3,476,77,2,495,77,2,514,77,2,532,77,10,551,77,10,570,77,8,925,77,0,944,77,0,962,77,0,981,77,0,9,107,1,28,107,1,47,107,1,65,107,1,84,107,1,103,107,3,420,107,1,439,107,1,458,107,3,476,107,2,495,107,2,514,107,2,532,107,2,551,107,10,570,107,8,887,107,0,906,107,0,925,107,0,944,107,0,962,107,0,981,107,0,9,138,1,28,138,1,47,138,1,65,138,1,84,138,1,103,138,3,121,138,3,140,138,2,420,138,1,439,138,1,458,138,3,476,138,3,495,138,2,514,138,2,532,138,2,551,138,2,570,138,10,869,138,0,887,138,0,906,138,0,925,138,0,944,138,0,962,138,0,981,138,0,28,169,1,47,169,1,65,169,1,84,169,1,103,169,1,121,169,3,140,169,2,159,169,2,420,169,1,439,169,1,458,169,1,476,169,3,495,169,2,514,169,2,532,169,2,551,169,2,570,169,10,831,169,0,850,169,0,869,169,0,887,169,0,906,169,0,925,169,0,944,169,0,962,169,0,981,169,0,28,200,1,47,200,1,65,200,1,84,200,1,103,200,1,121,200,3,140,200,3,159,200,2,177,200,2,439,200,1,458,200,1,476,200,3,495,200,3,514,200,2,532,200,2,551,200,2,570,200,2,813,200,0,831,200,0,850,200,0,869,200,0,887,200,0,906,200,0,925,200,0,944,200,0,962,200,0,981,200,0,28,230,1,47,230,1,65,230,1,84,230,1,103,230,1,121,230,1,140,230,3,159,230,2,177,230,2,196,230,2,439,230,1,458,230,1,476,230,1,495,230,3,514,230,2,532,230,2,551,230,2,813,230,0,831,230,0,850,230,0,869,230,0,887,230,0,906,230,0,925,230,0,944,230,0,962,230,0,981,230,0,28,261,6,47,261,1,65,261,1,84,261,1,103,261,1,121,261,1,140,261,3,159,261,3,177,261,2,196,261,2,215,261,2,458,261,1,476,261,1,495,261,3,514,261,3,532,261,2,794,261,0,813,261,0,831,261,0,850,261,0,869,261,0,887,261,0,906,261,0,925,261,0,944,261,0,962,261,0,28,292,6,47,292,1,65,292,1,84,292,1,103,292,1,121,292,1,140,292,3,159,292,3,177,292,2,196,292,2,215,292,2,775,292,0,794,292,0,813,292,0,831,292,0,850,292,0,869,292,0,887,292,0,906,292,0,925,292,0,944,292,0,962,292,0,47,322,1,65,322,1,84,322,1,103,322,1,121,322,1,140,322,1,159,322,3,177,322,2,196,322,2,215,322,2,234,322,2,775,322,0,794,322,0,813,322,0,831,322,0,850,322,0,869,322,0,887,322,0,906,322,0,925,322,0,944,322,0,962,322,0,47,353,6,65,353,1,84,353,1,103,353,1,121,353,1,140,353,1,159,353,3,177,353,3,196,353,2,215,353,2,234,353,2,439,353,2,458,353,10,476,353,8,495,353,8,514,353,8,532,353,8,551,353,8,775,353,0,794,353,0,813,353,0,831,353,0,850,353,0,869,353,0,887,353,0,906,353,0,925,353,0,944,353,0,962,353,0,47,384,6,65,384,1,84,384,1,103,384,1,121,384,1,140,384,1,159,384,3,177,384,3,196,384,2,215,384,2,234,384,2,402,384,3,420,384,2,439,384,2,458,384,2,476,384,10,495,384,8,514,384,8,532,384,8,551,384,0,570,384,0,589,384,0,757,384,9,775,384,0,794,384,0,813,384,0,831,384,0,850,384,0,869,384,0,887,384,0,906,384,0,925,384,0,944,384,0,47,414,6,65,414,6,84,414,1,103,414,1,121,414,1,140,414,1,159,414,1,177,414,3,196,414,3,215,414,2,234,414,2,252,414,2,383,414,1,402,414,3,420,414,2,439,414,2,458,414,2,476,414,10,495,414,8,514,414,0,532,414,0,551,414,0,570,414,0,589,414,0,607,414,0,626,414,0,757,414,11,775,414,0,794,414,0,813,414,0,831,414,0,850,414,0,869,414,0,887,414,0,906,414,0,925,414,0,944,414,0,65,445,6,84,445,1,103,445,1,121,445,1,140,445,1,159,445,1,177,445,3,196,445,3,215,445,2,234,445,2,252,445,2,364,445,1,383,445,1,402,445,1,420,445,3,439,445,2,458,445,2,476,445,2,495,445,8,514,445,0,532,445,0,551,445,0,570,445,0,589,445,0,607,445,0,626,445,0,645,445,0,757,445,11,775,445,9,794,445,0,813,445,0,831,445,0,850,445,0,869,445,0,887,445,0,906,445,0,925,445,0,944,445,0,65,476,6,84,476,1,103,476,1,121,476,1,140,476,1,159,476,1,177,476,1,196,476,3,215,476,2,234,476,2,252,476,2,346,476,6,364,476,1,383,476,1,402,476,1,420,476,3,439,476,3,458,476,2,476,476,2,514,476,0,532,476,0,551,476,0,570,476,0,589,476,0,607,476,0,626,476,0,645,476,0,738,476,5,757,476,11,775,476,9,794,476,0,813,476,0,831,476,0,850,476,0,869,476,0,887,476,0,906,476,0,925,476,0,944,476,0,65,507,6,84,507,6,103,507,1,121,507,1,140,507,1,159,507,1,177,507,1,196,507,3,215,507,3,234,507,2,252,507,2,271,507,2,327,507,7,346,507,6,364,507,1,383,507,1,402,507,1,420,507,1,439,507,3,458,507,2,532,507,0,551,507,0,570,507,0,589,507,0,607,507,0,626,507,0,645,507,0,663,507,0,738,507,5,757,507,5,775,507,9,794,507,0,813,507,0,831,507,0,850,507,0,869,507,0,887,507,0,906,507,0,925,507,0,84,537,6,103,537,1,121,537,1,140,537,1,159,537,1,177,537,1,196,537,3,215,537,3,234,537,2,252,537,2,271,537,2,327,537,7,346,537,7,364,537,6,383,537,1,402,537,1,420,537,1,439,537,1,458,537,3,551,537,0,570,537,0,589,537,0,607,537,0,626,537,0,645,537,0,663,537,0,682,537,0,719,537,5,738,537,5,757,537,5,775,537,11,794,537,9,813,537,0,831,537,0,850,537,0,869,537,0,887,537,0,906,537,0,925,537,0,84,568,6,103,568,1,121,568,1,140,568,1,159,568,1,177,568,1,196,568,1,215,568,3,234,568,2,252,568,2,271,568,2,290,568,2,308,568,7,327,568,7,346,568,7,364,568,6,383,568,6,402,568,1,420,568,1,439,568,1,551,568,0,570,568,0,589,568,0,607,568,0,626,568,0,645,568,0,663,568,0,682,568,0,719,568,5,738,568,5,757,568,5,775,568,11,794,568,9,813,568,0,831,568,0,850,568,0,869,568,0,887,568,0,906,568,0,925,568,0,84,599,6,103,599,6,121,599,1,140,599,1,159,599,1,177,599,1,196,599,1,215,599,3,234,599,3,252,599,2,271,599,2,290,599,2,308,599,7,327,599,7,346,599,7,364,599,7,383,599,6,402,599,1,420,599,1,439,599,1,570,599,0,589,599,0,607,599,0,626,599,0,645,599,0,663,599,0,682,599,0,701,599,4,719,599,5,738,599,5,757,599,5,775,599,11,794,599,9,813,599,0,831,599,0,850,599,0,869,599,0,887,599,0,906,599,0,103,629,6,121,629,1,140,629,1,159,629,1,177,629,1,196,629,1,215,629,1,234,629,3,252,629,2,271,629,2,290,629,2,308,629,2,327,629,7,346,629,7,364,629,7,383,629,6,402,629,6,420,629,1,570,629,0,589,629,0,607,629,0,626,629,0,645,629,0,663,629,0,682,629,0,701,629,4,719,629,5,738,629,5,757,629,5,775,629,5,794,629,9,813,629,0,831,629,0,850,629,0,869,629,0,887,629,0,906,629,0,103,660,6,121,660,6,140,660,1,159,660,1,177,660,1,196,660,1,215,660,1,234,660,3,252,660,3,271,660,2,290,660,2,308,660,2,327,660,7,346,660,7,364,660,7,383,660,7,402,660,6,420,660,1,570,660,0,589,660,0,607,660,0,626,660,0,645,660,0,663,660,0,682,660,4,701,660,4,719,660,4,738,660,5,757,660,5,775,660,5,794,660,11,813,660,9,831,660,0,850,660,0,869,660,0,887,660,0,121,691,6,140,691,1,159,691,1,177,691,1,196,691,1,215,691,1,234,691,3,252,691,3,271,691,2,290,691,2,308,691,2,327,691,2,346,691,7,364,691,7,383,691,7,402,691,7,420,691,6,589,691,0,607,691,0,626,691,0,645,691,0,663,691,0,682,691,4,701,691,4,719,691,4,738,691,5,757,691,5,775,691,5,794,691,11,813,691,9,831,691,0,850,691,0,869,691,0,887,691,0,121,721,6,140,721,1,159,721,1,177,721,1,196,721,1,215,721,1,234,721,1,252,721,3,271,721,2,290,721,2,308,721,2,327,721,2,346,721,7,364,721,7,383,721,7,402,721,7,589,721,0,607,721,0,626,721,0,645,721,0,663,721,4,682,721,4,701,721,4,719,721,4,738,721,5,757,721,5,775,721,5,794,721,11,813,721,9,831,721,0,850,721,0,869,721,0,140,752,6,159,752,1,177,752,1,196,752,1,215,752,1,234,752,1,252,752,3,271,752,3,290,752,2,308,752,2,327,752,2,346,752,2,364,752,7,383,752,7,402,752,7,589,752,0,607,752,0,626,752,0,645,752,4,663,752,4,682,752,4,701,752,4,719,752,4,738,752,5,757,752,5,775,752,5,794,752,5,813,752,9,831,752,0,850,752,0,869,752,0,140,783,6,159,783,1,177,783,1,196,783,1,215,783,1,234,783,1,252,783,3,271,783,3,290,783,2,308,783,2,327,783,2,346,783,2,364,783,2,383,783,7,402,783,7,607,783,0,626,783,0,645,783,8,663,783,4,682,783,4,701,783,4,719,783,4,738,783,4,757,783,5,775,783,5,794,783,5,813,783,11,831,783,9,850,783,0,159,814,6,177,814,1,196,814,1,215,814,1,234,814,1,252,814,1,271,814,3,290,814,3,308,814,2,327,814,2,346,814,2,364,814,2,383,814,10,402,814,7,607,814,8,626,814,8,645,814,8,663,814,4,682,814,4,701,814,4,719,814,4,738,814,4,757,814,5,775,814,5,794,814,5,813,814,11,831,814,9,850,814,0,159,844,6,177,844,1,196,844,1,215,844,1,234,844,1,252,844,1,271,844,3,290,844,3,308,844,2,327,844,2,346,844,2,364,844,2,383,844,10,607,844,8,626,844,8,645,844,8,663,844,4,682,844,4,701,844,4,719,844,4,738,844,4,757,844,5,775,844,5,794,844,5,813,844,5,831,844,9,177,875,1,196,875,1,215,875,1,234,875,1,252,875,1,271,875,1,290,875,3,308,875,2,327,875,2,346,875,2,364,875,2,383,875,2,626,875,8,645,875,8,663,875,8,682,875,4,701,875,4,719,875,4,738,875,4,757,875,5,775,875,5,794,875,5,813,875,5,831,875,11,196,906,1,215,906,1,234,906,1,252,906,1,271,906,1,290,906,3,308,906,3,327,906,2,346,906,2,364,906,2,626,906,8,645,906,8,663,906,8,682,906,4,701,906,4,719,906,4,738,906,4,757,906,4,775,906,5,794,906,5,813,906,5,215,936,1,234,936,1,252,936,1,271,936,1,290,936,3,308,936,3,327,936,2,346,936,2,645,936,8,663,936,8,682,936,4,701,936,4,719,936,4,738,936,4,757,936,4,775,936,5,794,936,5,234,967,1,252,967,1,271,967,1,290,967,1,308,967,3,327,967,2,663,967,8,682,967,4,701,967,4,719,967,4,738,967,4,757,967,4,775,967,5,271,998,1,290,998,1,719,998,4]};

  /* ---------------- Theme ---------------- */
  var toggle = document.querySelector('.theme-toggle');
  var themeListeners = [];

  function currentTheme() { return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'; }

  function syncToggleLabel() {
    if (!toggle) return;
    toggle.setAttribute('aria-label', currentTheme() === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }

  function applyTheme(theme, remember) {
    root.setAttribute('data-theme', theme);
    if (remember) { try { localStorage.setItem('wg-theme', theme); } catch (e) {} }
    syncToggleLabel();
    themeListeners.forEach(function (fn) { fn(theme); });
  }

  if (toggle) {
    syncToggleLabel();
    toggle.addEventListener('click', function (ev) {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      if (!document.startViewTransition || reduceMotion.matches) { applyTheme(next, true); return; }
      var r = toggle.getBoundingClientRect();
      var x = ev.clientX || (r.left + r.width / 2);
      var y = ev.clientY || (r.top + r.height / 2);
      var radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      var vt = document.startViewTransition(function () { applyTheme(next, true); });
      vt.ready.then(function () {
        root.animate(
          { clipPath: ['circle(0px at ' + x + 'px ' + y + 'px)', 'circle(' + radius + 'px at ' + x + 'px ' + y + 'px)'] },
          { duration: 700, easing: 'cubic-bezier(.65,0,.35,1)', pseudoElement: '::view-transition-new(root)' }
        );
      }).catch(function () {});
    });
  }

  // Follow the OS setting until the visitor picks one
  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
  var onSystemChange = function (e) {
    var saved = null;
    try { saved = localStorage.getItem('wg-theme'); } catch (err) {}
    if (!saved) applyTheme(e.matches ? 'dark' : 'light', false);
  };
  if (darkQuery.addEventListener) darkQuery.addEventListener('change', onSystemChange);

  /* ---------------- Header ---------------- */
  var header = document.querySelector('.site-header');
  function onScrollHeader() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();

  /* ---------------- Hero screening field ---------------- */
  function createField() {
    var canvas = document.querySelector('.hero-canvas');
    var hero = document.querySelector('.hero');
    var anchor = document.querySelector('.hero-field');
    var label = document.querySelector('.screen-label');
    var status = document.querySelector('.screen-status');
    var steps = Array.prototype.slice.call(document.querySelectorAll('.screen-steps i'));
    var stepButtons = Array.prototype.slice.call(document.querySelectorAll('.screen-steps button'));
    if (!canvas || !hero || !anchor || !W_POINTS || !canvas.getContext) return null;

    var ctx = canvas.getContext('2d');
    var COLS = 56, ROWS = 36;
    var N = COLS * ROWS;
    var raw = W_POINTS.p;
    var M = raw.length / 3;
    var SRC_COLS = 1124 / 21;                    // sampling grid width of the mark

    var CRITERIA = [
      'Screening for first-lien whole loans',
      'Screening for $3MM+ UPB per asset',
      'Screening for in-place cash flow',
      'Screening for ≤ 80% LTV on as-is value'
    ];
    // Timeline (ms of on-screen time). Each criterion sweeps the tape left to right.
    var STAGE_START = 1300, STAGE_GAP = 1000, SWEEP = 860, FALL = 650;
    var MORPH_START = STAGE_START + 3 * STAGE_GAP + SWEEP + 300;
    var MORPH_DUR = 1500, MORPH_SPREAD = 450;
    var DONE = MORPH_START + MORPH_DUR + MORPH_SPREAD + 150;

    var w = 0, h = 0, dpr = 1;
    var tapeSize = 2, markSize = 3, cell = 10;
    var tapeL = 0, tapeR = 1, tapeT = 0, tapeB = 1;
    var inkRGB = [14, 24, 56], accentRGB = [35, 109, 179], palLight = [], palDark = [];
    var points = [];
    var elapsed = 0, lastFrame = 0;
    var playing = false, running = false, visible = false, rafId = 0;
    var mouse = { x: -9999, y: -9999, active: false };
    var lastStage = -1;
    var leftView = false;                        // hero fully scrolled out since last play
    var stageCap = 5;                            // < 5 freezes the screen after that criterion (reduced motion)

    function hexToRgb(hex) {
      var v = parseInt(hex.slice(1), 16);
      return [(v >> 16) & 255, (v >> 8) & 255, v & 255];
    }
    function mix(a, b, t) { return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]; }
    function rgb(c) { return 'rgb(' + (c[0] | 0) + ',' + (c[1] | 0) + ',' + (c[2] | 0) + ')'; }
    function rgba(c, a) { return 'rgba(' + (c[0] | 0) + ',' + (c[1] | 0) + ',' + (c[2] | 0) + ',' + a + ')'; }

    W_POINTS.pal.forEach(function (hx) {
      var c = hexToRgb(hx);
      palLight.push(c);
      // brighten for dark backgrounds without washing the hue out to grey
      var lum = (c[0] * 0.3 + c[1] * 0.59 + c[2] * 0.11) / 255;
      palDark.push(mix(c, [150, 205, 250], Math.max(0.12, 0.5 - lum)));
    });

    function readColors() {
      var cs = getComputedStyle(root);
      var ink = cs.getPropertyValue('--ink').trim();
      var acc = cs.getPropertyValue('--accent').trim();
      if (/^#([0-9a-f]{6})$/i.test(ink)) inkRGB = hexToRgb(ink);
      if (/^#([0-9a-f]{6})$/i.test(acc)) accentRGB = hexToRgb(acc);
    }

    // Seeded shuffle so the composition is identical on every load
    var seed = 20261122;
    function rand() { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }

    function init() {
      var order = [];
      for (var i = 0; i < N; i++) order.push(i);
      for (var k = N - 1; k > 0; k--) { var j = Math.floor(rand() * (k + 1)); var tmp = order[k]; order[k] = order[j]; order[j] = tmp; }
      var survivors = {};
      for (var s = 0; s < M; s++) survivors[order[s]] = true;

      var stageCounter = 0;
      for (var n = 0; n < N; n++) {
        var isSurvivor = !!survivors[n];
        points.push({
          col: n % COLS, row: Math.floor(n / COLS),
          stage: isSurvivor ? 0 : (stageCounter++ % 4) + 1,
          jitter: (rand() - 0.5) * 0.5,
          jitterY: (rand() - 0.5) * 0.35,
          appear: Math.floor(n / COLS) * 20 + rand() * 240,
          phase: rand() * Math.PI * 2,
          hx: 0, hy: 0, tx: 0, ty: 0, pal: 0, tn: 0, xn: 0,
          ox: 0, oy: 0
        });
      }
      // pair survivors with mark targets, both ordered left-to-right, so the flow reads cleanly
      var surv = points.filter(function (p) { return p.stage === 0; });
      surv.sort(function (a, b) { return (a.col + a.row * 0.25) - (b.col + b.row * 0.25); });
      var targets = [];
      for (var t = 0; t < M; t++) targets.push({ x: raw[t * 3], y: raw[t * 3 + 1], c: raw[t * 3 + 2] });
      targets.sort(function (a, b) { return (a.x + a.y * 0.25) - (b.x + b.y * 0.25); });
      surv.forEach(function (p, i) { p.target = targets[i]; p.pal = targets[i].c; p.tn = targets[i].x / 1000; });
    }

    function layout() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      var hr = hero.getBoundingClientRect();
      w = hr.width; h = hr.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);

      var ar = anchor.getBoundingClientRect();
      var ax = ar.left - hr.left, ay = ar.top - hr.top, aw = ar.width, ah = ar.height;
      var reserve = 44;                            // room for the status line
      var aspect = W_POINTS.aspect;
      var TAPE_X = 1.08, TAPE_Y = 1.16;          // tape is a little larger than the mark
      var mw = Math.min(aw / TAPE_X, (ah - reserve) * aspect * 0.86);
      var mh = mw / aspect;
      // align the tape's right edge with the page margin
      var mx = ax + aw - mw * TAPE_X + (mw * TAPE_X - mw) / 2;
      var my = ay + (ah - reserve - mh) / 2;

      cell = mw / SRC_COLS;
      markSize = Math.max(2, cell * 0.5);

      var tw = mw * TAPE_X, th = mh * TAPE_Y;
      var tx0 = mx - (tw - mw) / 2, ty0 = my - (th - mh) / 2;
      tapeL = tx0; tapeR = tx0 + tw; tapeT = ty0; tapeB = ty0 + th;
      if (status) {
        status.style.top = Math.round(tapeB - ay + Math.max(16, cell * 1.6)) + 'px';
        status.style.bottom = 'auto';
      }
      var gy = th / ROWS;

      // tape columns are grouped like fields on a loan tape
      var groups = [5, 8, 4, 9, 6, 7, 5, 12];
      var gap = (tw / COLS) * 0.9;
      var totalGaps = 0;
      for (var g = 0, ig = 0, c = 0; c < COLS; c++) { if (ig === groups[g % groups.length]) { totalGaps++; g++; ig = 0; } ig++; }
      var step = (tw - totalGaps * gap) / COLS;
      tapeSize = Math.max(1.5, Math.min(step, gy) * 0.4);
      var colX = [], acc = 0, gi = 0, inGroup = 0;
      for (var i = 0; i < COLS; i++) {
        if (inGroup === groups[gi % groups.length]) { acc += gap; gi++; inGroup = 0; }
        colX.push(tx0 + acc + step * 0.5);
        acc += step; inGroup++;
      }

      points.forEach(function (p) {
        p.hx = colX[p.col] + p.jitter * step * 0.3;
        p.hy = ty0 + gy * (p.row + 0.5) + p.jitterY * gy * 0.3;
        p.xn = (p.hx - tapeL) / (tapeR - tapeL);
        if (p.target) {
          p.tx = mx + (p.target.x / 1000) * mw;
          p.ty = my + (p.target.y / 1000) * mh;
        }
      });
    }

    function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
    function easeOut(t) { return 1 - Math.pow(1 - t, 3); }
    function clamp01(t) { return t < 0 ? 0 : t > 1 ? 1 : t; }
    function sweepStart(k) { return STAGE_START + (k - 1) * STAGE_GAP; }

    function setStage(stage) {
      if (stage === lastStage || !label) return;
      lastStage = stage;
      var text = stage === 0 ? 'Reading the tape' : stage <= 4 ? CRITERIA[stage - 1] : 'Screened against the buy box';
      label.style.opacity = 0;
      setTimeout(function () { label.textContent = text; label.style.opacity = 1; }, 160);
      steps.forEach(function (el, i) {
        el.classList.toggle('on', i < stage);
        el.classList.toggle('current', i === stage - 1);
      });
    }

    function draw(t, now) {
      var dark = currentTheme() === 'dark';
      var pal = dark ? palDark : palLight;
      var ink = inkRGB, accent = accentRGB;
      var baseTape = dark ? 0.5 : 0.42;
      var outAlpha = dark ? 0.1 : 0.085;
      var tsec = now * 0.001;
      var idle = t >= DONE && stageCap > 4;
      var lastSweep = Math.min(4, stageCap);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      var stageNow = 0;
      for (var s = 1; s <= lastSweep; s++) if (t >= sweepStart(s)) stageNow = s;
      if (t >= MORPH_START && stageCap > 4) stageNow = 5;
      setStage(stageNow);

      // scan line for the active criterion
      for (var k = 1; k <= lastSweep; k++) {
        var u = (t - sweepStart(k)) / SWEEP;
        if (u < -0.05 || u > 1.08) continue;
        var sx = tapeL - 12 + (tapeR - tapeL + 24) * u;
        var fade = clamp01(Math.min((u + 0.05) / 0.12, (1.08 - u) / 0.12));
        var trail = ctx.createLinearGradient(sx - 90, 0, sx, 0);
        trail.addColorStop(0, rgba(accent, 0));
        trail.addColorStop(1, rgba(accent, (dark ? 0.16 : 0.1) * fade));
        ctx.globalAlpha = 1;
        ctx.fillStyle = trail;
        ctx.fillRect(sx - 90, tapeT - 14, 90, tapeB - tapeT + 28);
        ctx.fillStyle = rgba(accent, 0.9 * fade);
        ctx.fillRect(sx - 0.75, tapeT - 18, 1.5, tapeB - tapeT + 36);
      }

      // loans that fail a criterion: knocked out as the line passes, then fall away
      for (var i = 0; i < N; i++) {
        var p = points[i];
        if (p.stage === 0) continue;
        var a = clamp01((t - p.appear) / 400) * baseTape;
        var hit = p.stage > lastSweep ? Infinity : sweepStart(p.stage) + SWEEP * p.xn;
        var e = easeOut(clamp01((t - hit) / FALL));
        var flash = t >= hit ? Math.max(0, 1 - (t - hit) / 260) : 0;
        var size = tapeSize * (1 + 0.6 * flash - 0.35 * e);
        var x = p.hx + Math.sin(tsec * 0.6 + p.phase) * 1.5 * e;
        var y = p.hy + e * cell * 1.8 + Math.cos(tsec * 0.5 + p.phase) * 1.2 * e;
        ctx.globalAlpha = Math.max(a + (outAlpha - a) * e, 0.85 * flash);
        ctx.fillStyle = flash > 0 ? rgb(mix(ink, accent, flash)) : rgb(ink);
        ctx.fillRect(x - size / 2, y - size / 2, size, size);
      }

      // loans that pass every criterion: pulse as each line passes, then form the mark
      for (var j = 0; j < N; j++) {
        var q = points[j];
        if (q.stage !== 0) continue;
        var appear = clamp01((t - q.appear) / 400);
        var pulse = 0;
        for (var k2 = 1; k2 <= lastSweep; k2++) {
          var dtp = t - (sweepStart(k2) + SWEEP * q.xn);
          if (dtp >= 0 && dtp < 380) pulse = Math.max(pulse, 1 - dtp / 380);
        }
        var passed = clamp01((stageNow >= 1 ? stageNow : 0) / 4);
        var m = stageCap > 4 ? ease(clamp01((t - MORPH_START - q.tn * MORPH_SPREAD) / MORPH_DUR)) : 0;
        var px = q.hx + (q.tx - q.hx) * m;
        var py = q.hy + (q.ty - q.hy) * m;
        py -= Math.sin(m * Math.PI) * cell * 2.2 * (0.5 - q.tn);     // slight arc

        var dx = 0, dy = 0;
        if (idle && mouse.active) {
          var ddx = px - mouse.x, ddy = py - mouse.y;
          var d2 = ddx * ddx + ddy * ddy, R = 110;
          if (d2 < R * R) {
            var d = Math.sqrt(d2) || 1;
            var f = Math.pow(1 - d / R, 2) * 16;
            dx = (ddx / d) * f; dy = (ddy / d) * f;
          }
        }
        q.ox += (dx - q.ox) * 0.12;
        q.oy += (dy - q.oy) * 0.12;

        var c = mix(mix(ink, accent, Math.max(pulse * 0.9, passed * 0.35 * (1 - m))), pal[q.pal], m);
        var base = baseTape + passed * 0.25 * (1 - m);
        var alpha = appear * Math.min(1, base + (1 - base) * m + pulse * 0.5);
        if (idle) alpha *= 0.86 + 0.14 * Math.sin(tsec * 1.4 + q.tx * 0.012 - q.ty * 0.006);
        var size2 = (tapeSize + (markSize - tapeSize) * m) * (1 + pulse * 0.5);

        ctx.globalAlpha = alpha;
        ctx.fillStyle = rgb(c);
        ctx.fillRect(px + q.ox - size2 / 2, py + q.oy - size2 / 2, size2, size2);
      }
      ctx.globalAlpha = 1;
    }

    // The clock only advances while the hero is on screen, so the sequence
    // always plays from the start the first time someone actually sees it.
    function loop(now) {
      if (!running) return;
      if (lastFrame) elapsed += Math.min(now - lastFrame, 50);
      lastFrame = now;
      draw(elapsed, now);
      rafId = requestAnimationFrame(loop);
    }
    function start() {
      if (running || !visible || !playing || document.hidden) return;
      running = true;
      lastFrame = 0;
      rafId = requestAnimationFrame(loop);
    }
    function stop() { running = false; lastFrame = 0; cancelAnimationFrame(rafId); }
    function redraw() { draw(elapsed, performance.now()); }

    // ---- wiring
    readColors();
    init();
    layout();

    var resizeTimer = 0;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { layout(); if (!running) redraw(); }, 120);
    });

    themeListeners.push(function () { readColors(); redraw(); });

    hero.addEventListener('pointermove', function (e) {
      if (e.pointerType !== 'mouse') return;
      var r = hero.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; mouse.active = true;
    });
    hero.addEventListener('pointerleave', function () { mouse.active = false; });

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        if (!visible) { leftView = true; stop(); return; }
        // coming back into view: replay the screen from the top
        if (leftView && playing) { elapsed = 0; mouse.active = false; }
        leftView = false;
        start();
      }).observe(hero);
    } else {
      visible = true;
    }
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop(); else start();
    });

    // gentle parallax as the hero leaves
    window.addEventListener('scroll', function () {
      var y = window.scrollY, hh = h || innerHeight;
      if (y > hh) return;
      var p = y / hh;
      canvas.style.transform = 'translate3d(0,' + (p * -60).toFixed(1) + 'px,0)';
      canvas.style.opacity = (1 - p * 0.85).toFixed(3);
    }, { passive: true });

    // The four dashes jump to the start of each criterion's sweep
    stepButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var k = parseInt(btn.getAttribute('data-stage'), 10) || 1;
        if (reduceMotion.matches) {
          stageCap = k;                            // show that screen's result, without motion
          elapsed = sweepStart(k) + SWEEP + FALL + 10;
          redraw();
          return;
        }
        stageCap = 5;
        elapsed = Math.max(0, sweepStart(k) - 250);
        playing = true;
        if (!running) start();
        if (!running) redraw();
      });
    });

    return {
      play: function () {
        if (reduceMotion.matches) { elapsed = DONE + 10; redraw(); return; }
        playing = true;
        start();
      }
    };
  }

  var field = createField();

  /* ---------------- Buy box frame ---------------- */
  var observed = document.querySelectorAll('[data-observe]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); }
      });
    }, { threshold: 0.25 });
    observed.forEach(function (el) { io.observe(el); });
  } else {
    observed.forEach(function (el) { el.classList.add('in-view'); });
  }

  /* ---------------- Seller tabs ---------------- */
  var tablist = document.querySelector('[role="tablist"]');
  if (tablist) {
    var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));
    var select = function (tab, focus) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(t.getAttribute('aria-controls'));
        if (!panel) return;
        if (on) {
          panel.hidden = false;
          panel.classList.remove('is-entering');
          void panel.offsetWidth;
          panel.classList.add('is-entering');
        } else {
          panel.hidden = true;
        }
      });
      if (focus) tab.focus();
      if (tablist.scrollWidth > tablist.clientWidth) {
        tab.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: reduceMotion.matches ? 'auto' : 'smooth' });
      }
    };
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { select(tab, false); });
      tab.addEventListener('keydown', function (e) {
        var next = null;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === 'Home') next = tabs[0];
        if (e.key === 'End') next = tabs[tabs.length - 1];
        if (next) { e.preventDefault(); select(next, true); }
      });
    });
  }

  /* ---------------- Process progress ---------------- */
  var process = document.querySelector('.process');
  if (process) {
    var stepEls = Array.prototype.slice.call(process.querySelectorAll('.step'));
    var ticking = false;
    var updateProcess = function () {
      ticking = false;
      var r = process.getBoundingClientRect();
      var vh = window.innerHeight;
      var p = clamp((vh * 0.82 - r.top) / (r.height + vh * 0.3), 0, 1);
      if (reduceMotion.matches) p = r.top < vh ? 1 : 0;
      process.style.setProperty('--progress', p.toFixed(4));
      var vertical = getComputedStyle(process).gridTemplateColumns.split(' ').length === 1;
      stepEls.forEach(function (s) {
        var frac = vertical ? s.offsetTop / process.offsetHeight : s.offsetLeft / process.offsetWidth;
        s.classList.toggle('is-on', p > 0.02 && p >= frac);
      });
    };
    var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(updateProcess); }
    }, { passive: true });
    window.addEventListener('resize', updateProcess);
    updateProcess();
  }

  /* ---------------- Page load ---------------- */
  var started = false;
  function begin() {
    if (started) return;
    started = true;
    requestAnimationFrame(function () {
      root.classList.add('is-loaded');
      if (field) field.play();
    });
  }
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(begin);
    setTimeout(begin, 1200);
  } else {
    begin();
  }
})();
