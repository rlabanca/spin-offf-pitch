/**
 * motion-fx.js — SPIN OFFF deck animation system.
 *
 * Plays on each `slidechange` event from <deck-stage>. Idempotent: replays
 * every time a slide becomes active. Designed to be print-safe — all
 * animations are disabled in @media print (see styles.css), and elements
 * always have a clean final CSS state in markup (initial offsets are
 * applied imperatively here, not in markup).
 *
 * Signature moves:
 *   data-anim="drop"     — falls from above with spring bounce (gravity feel)
 *   data-anim="stack"    — like drop, but emphasizes serial stagger
 *   data-anim="snap"     — magnetic snap-in (small offset, overshoot)
 *   data-anim="spin"     — 3D Y-axis flip (used on SPIN word)
 *   data-anim="countup"  — text content animates 0 → target number
 *   data-anim="bar"      — vertical grow (for bar charts)
 *
 * Element-level attributes:
 *   data-anim-i="N"      — explicit order index for stagger
 *   data-anim-delay="0.4"— extra delay seconds added on top of stagger
 *
 * If no [data-anim] is present, sensible defaults are applied per element
 * type (.title → drop, .card → drop+stagger, .numeral → countup, etc.).
 *
 * Slide 01 also gets a Matter.js physics showpiece — the OFFF tile grid
 * literally falls and settles, then crossfades to the static layout.
 */

(() => {
  if (typeof window === 'undefined') return;

  const ANIM_PREPPED = 'animPrepped';

  // -------- Wait for Motion One + DOM ready --------
  const ready = () => {
    if (!window.Motion || !document.body) {
      setTimeout(ready, 30);
      return;
    }
    init();
  };
  ready();

  function init() {
    const { animate, spring } = window.Motion;
    const deck = document.querySelector('deck-stage');
    if (!deck) return;

    // ---------------- Auto-tagging defaults ----------------
    // Adds data-anim to common element types if not already set.
    // Skip entirely when the slide opts out via data-anim-mode="manual".
    function autoTag(slide) {
      if (slide._autoTagged) return;
      slide._autoTagged = true;
      if (slide.getAttribute('data-anim-mode') === 'manual') return;

      // Hero text — drops in with bounce
      slide.querySelectorAll('.title, .display, .sub').forEach((el, i) => {
        if (!el.hasAttribute('data-anim')) {
          el.setAttribute('data-anim', 'drop');
          if (!el.hasAttribute('data-anim-i')) el.setAttribute('data-anim-i', String(i));
        }
      });

      // Cards — drop with stagger (block stack feel)
      slide.querySelectorAll('.card').forEach((el, i) => {
        if (!el.hasAttribute('data-anim')) {
          el.setAttribute('data-anim', 'drop');
          if (!el.hasAttribute('data-anim-i')) el.setAttribute('data-anim-i', String(20 + i));
        }
      });

      // Body / supporting copy — gentle snap
      slide.querySelectorAll('.lead, .body-lg').forEach((el, i) => {
        if (!el.hasAttribute('data-anim') && !el.closest('[data-anim]')) {
          el.setAttribute('data-anim', 'snap');
          if (!el.hasAttribute('data-anim-i')) el.setAttribute('data-anim-i', String(40 + i));
        }
      });

      // Tags + small captions — quick snap
      slide.querySelectorAll('.tag, .numtag').forEach((el, i) => {
        if (!el.hasAttribute('data-anim') && !el.closest('[data-anim]')) {
          el.setAttribute('data-anim', 'snap');
          if (!el.hasAttribute('data-anim-i')) el.setAttribute('data-anim-i', String(i));
        }
      });

      // Numerals — count up
      slide.querySelectorAll('.numeral').forEach((el) => {
        if (!el.hasAttribute('data-anim')) {
          el.setAttribute('data-anim', 'countup');
        }
      });

      // Bar chart columns — grow from bottom
      slide.querySelectorAll('.bar-stack').forEach((el, i) => {
        if (!el.hasAttribute('data-anim')) {
          el.setAttribute('data-anim', 'bar');
          el.setAttribute('data-anim-i', String(i));
        }
      });

      // Tile grid cells — gravity-like drop with strong stagger
      slide.querySelectorAll('.tile-grid > .tile').forEach((el, i) => {
        if (!el.hasAttribute('data-anim')) {
          el.setAttribute('data-anim', 'drop');
          el.setAttribute('data-anim-i', String(i));
        }
      });

      // Header bar + page-number watermark — light snap
      slide.querySelectorAll('.bar, .snum').forEach((el) => {
        if (!el.hasAttribute('data-anim')) {
          el.setAttribute('data-anim', 'snap');
          el.setAttribute('data-anim-i', '99');
        }
      });
    }

    // ---------------- Prep: set hidden initial state ----------------
    function prep(el) {
      if (el.dataset[ANIM_PREPPED]) return;
      el.dataset[ANIM_PREPPED] = '1';
      const anim = el.getAttribute('data-anim');
      switch (anim) {
        case 'drop':
        case 'stack':
          el.style.opacity = '0';
          el.style.transform = 'translateY(-72px)';
          el.style.willChange = 'transform, opacity';
          break;
        case 'snap':
          el.style.opacity = '0';
          el.style.transform = 'translateY(22px)';
          el.style.willChange = 'transform, opacity';
          break;
        case 'spin':
          el.style.opacity = '0';
          el.style.transform = 'rotateY(-180deg)';
          el.style.transformStyle = 'preserve-3d';
          el.style.transformOrigin = '50% 50%';
          el.style.willChange = 'transform, opacity';
          break;
        case 'countup':
          // Stash final text so we can animate from 0 back to it
          if (!el.dataset.animTarget) {
            el.dataset.animTarget = el.textContent.trim();
          }
          break;
        case 'bar': {
          const h = el.style.height || getComputedStyle(el).height;
          if (h && !el.dataset.animHeight) el.dataset.animHeight = h;
          el.style.height = '0';
          el.style.willChange = 'height';
          break;
        }
      }
    }

    // ---------------- count-up driver (rAF — Motion's scalar API doesn't surface onUpdate) ----------------
    function countUp(el, target, delaySec) {
      // Cancel any in-flight count for this element so replays restart cleanly
      if (el._countRaf) cancelAnimationFrame(el._countRaf);
      el.textContent = target.format(0);
      const DURATION = 1400;
      const ease = (t) => 1 - Math.pow(1 - t, 3); // ease-out cubic
      const startAt = performance.now() + delaySec * 1000;
      const tick = (now) => {
        const elapsed = now - startAt;
        if (elapsed < 0) { el._countRaf = requestAnimationFrame(tick); return; }
        const p = Math.min(1, elapsed / DURATION);
        const v = target.value * ease(p);
        el.textContent = target.format(v);
        if (p < 1) el._countRaf = requestAnimationFrame(tick);
        else el._countRaf = 0;
      };
      el._countRaf = requestAnimationFrame(tick);
    }

    // ---------------- countup helper ----------------
    function parseTarget(s) {
      // Skip ranges like "150–200M" or "15–20M" (en-dash or hyphen between digits)
      if (/\d\s*[–—-]\s*\d/.test(s)) return null;

      const m = s.match(/^([€$£]?)(-?\d[\d,]*(?:\.\d+)?)([KMB%+]*)(.*)$/);
      if (!m) return null;
      const [, currency, numStr, suffix, rest] = m;
      const value = parseFloat(numStr.replace(/,/g, ''));
      if (isNaN(value)) return null;
      const hasComma = numStr.includes(',');
      const decimalPart = numStr.split('.')[1];
      const decimals = decimalPart ? decimalPart.length : 0;
      return {
        value,
        format(v) {
          const fixed = v.toFixed(decimals);
          let formatted = fixed;
          if (hasComma) {
            const [intPart, decPart] = fixed.split('.');
            formatted = parseInt(intPart, 10).toLocaleString('en-US');
            if (decPart) formatted += '.' + decPart;
          }
          return `${currency}${formatted}${suffix || ''}${rest || ''}`;
        },
      };
    }

    // ---------------- play: animate all tagged elements ----------------
    function play(slide) {
      autoTag(slide);

      const els = Array.from(slide.querySelectorAll('[data-anim]'));
      els.forEach(prep);

      // Order by data-anim-i (defaults 0)
      els.sort((a, b) => {
        const ai = parseInt(a.getAttribute('data-anim-i') || '0', 10);
        const bi = parseInt(b.getAttribute('data-anim-i') || '0', 10);
        return ai - bi;
      });

      els.forEach((el, idx) => {
        const anim = el.getAttribute('data-anim');
        const explicitDelay = parseFloat(el.dataset.animDelay || '0');
        const stagger = parseFloat(el.dataset.animStagger || '0.05');
        const delay = explicitDelay + idx * stagger;

        switch (anim) {
          case 'drop':
          case 'stack':
            animate(el,
              { opacity: [0, 1], transform: ['translateY(-72px)', 'translateY(0px)'] },
              { duration: 0.85, delay, easing: spring({ stiffness: 200, damping: 16, mass: 1.1 }) }
            );
            break;
          case 'snap':
            animate(el,
              { opacity: [0, 1], transform: ['translateY(22px)', 'translateY(0px)'] },
              { duration: 0.55, delay, easing: spring({ stiffness: 320, damping: 24 }) }
            );
            break;
          case 'spin':
            animate(el,
              { opacity: [0, 1], transform: ['rotateY(-180deg)', 'rotateY(0deg)'] },
              { duration: 1.1, delay, easing: spring({ stiffness: 90, damping: 14 }) }
            );
            break;
          case 'countup': {
            const target = parseTarget(el.dataset.animTarget || '');
            if (!target) {
              el.textContent = el.dataset.animTarget || el.textContent;
              break;
            }
            countUp(el, target, delay);
            break;
          }
          case 'bar':
            animate(el,
              { height: ['0%', el.dataset.animHeight || '0%'] },
              { duration: 0.75, delay: delay * 0.6, easing: spring({ stiffness: 160, damping: 20 }) }
            );
            break;
        }
      });
    }

    deck.addEventListener('slidechange', (e) => {
      if (e.detail && e.detail.slide) play(e.detail.slide);
    });

    // Snap any in-flight count-up to its final value before print, so PDF
    // export never shows an intermediate number.
    window.addEventListener('beforeprint', () => {
      document.querySelectorAll('[data-anim="countup"]').forEach((el) => {
        if (el._countRaf) { cancelAnimationFrame(el._countRaf); el._countRaf = 0; }
        const t = parseTarget(el.dataset.animTarget || '');
        if (t) el.textContent = t.format(t.value);
        else if (el.dataset.animTarget) el.textContent = el.dataset.animTarget;
      });
    });

    // -------- Matter.js showpiece for slide 01 --------
    setupMatterSlide01();

    // If the initial `slidechange` already fired before our listener attached
    // (Motion One CDN load can race the web-component upgrade), animate the
    // currently-active slide manually. The deck marks the active slide with
    // `data-active`.
    const active = deck.querySelector('section[data-active]') ||
                   deck.querySelector('section');
    if (active) {
      // Tiny delay so other init code (e.g. setupMatterSlide01) registers first
      setTimeout(() => play(active), 0);
    }
  }

  // ---------------- Slide 01: Matter.js physics showpiece ----------------
  function setupMatterSlide01() {
    const tryStart = () => {
      if (!window.Matter || !window.Motion) { setTimeout(tryStart, 50); return; }
      mount();
    };
    tryStart();

    function mount() {
      const slide = Array.from(document.querySelectorAll('deck-stage > section'))
        .find((s) => (s.getAttribute('data-label') || '').startsWith('01'));
      if (!slide) return;

      const grid = slide.querySelector('.tile-grid');
      if (!grid) return;

      // Position the canvas above the tile grid; keep the grid as final state.
      const canvas = document.createElement('canvas');
      canvas.width = 1920;
      canvas.height = 1080;
      canvas.setAttribute('data-physics', '1');
      Object.assign(canvas.style, {
        position: 'absolute',
        inset: '0',
        width: '100%',
        height: '100%',
        zIndex: '4',
        pointerEvents: 'none',
        opacity: '1',
        transition: 'opacity 0.7s ease-out',
      });
      slide.appendChild(canvas);

      // Hide the grid until physics finishes; the black SPIN/OFFF tile shows immediately
      // because we'll paint it as the static "floor" in the physics pass anyway.
      grid.style.opacity = '0';
      grid.style.transition = 'opacity 0.6s ease-out';

      // Geometry — matches CSS grid: cols 1.4fr 1fr 1fr 1fr, rows 1fr 1fr 1.6fr
      // 1920 / 4.4 = 436.36;  col1 = 611, col2-4 = 436
      // 1080 / 3.6 = 300;     row1 = 300, row2 = 300, row3 = 480 (black floor band)
      const COL = [0, 611, 611 + 436, 611 + 436 * 2, 1920];
      const ROW_TOPS = [0, 300, 600, 1080];
      const FLOOR_Y = ROW_TOPS[2]; // 600 — top of the black tile

      const TILES = [
        { color: '#FF6F2C', col: 0, row: 0 }, // orange
        { color: '#1FE2D9', col: 1, row: 0 }, // cyan
        { color: '#FF66B2', col: 2, row: 0 }, // pink
        { color: '#27D274', col: 3, row: 0 }, // green
        { color: '#6D452B', col: 0, row: 1 }, // brown
        { color: '#EFE8DA', col: 1, row: 1 }, // paper
        { color: '#4D6BFF', col: 2, row: 1 }, // electric
        { color: '#E55530', col: 3, row: 1 }, // red
      ];

      // Read actual brand colors from CSS variables so we stay in sync.
      const cssRoot = getComputedStyle(document.documentElement);
      const varColor = (name, fallback) => {
        const v = cssRoot.getPropertyValue(name).trim();
        return v || fallback;
      };
      const COLOR_MAP = {
        '#FF6F2C': varColor('--offf-orange',   '#FF6F2C'),
        '#1FE2D9': varColor('--offf-cyan',     '#1FE2D9'),
        '#FF66B2': varColor('--offf-pink',     '#FF66B2'),
        '#27D274': varColor('--offf-green',    '#27D274'),
        '#6D452B': varColor('--offf-brown',    '#6D452B'),
        '#EFE8DA': varColor('--offf-paper',    '#EFE8DA'),
        '#4D6BFF': varColor('--offf-electric', '#4D6BFF'),
        '#E55530': varColor('--offf-red',      '#E55530'),
      };
      const BLACK = varColor('--offf-black', '#000');

      const ctx = canvas.getContext('2d');
      const { Engine, World, Bodies, Runner, Body } = window.Matter;
      let engine, runner, rafId, bodies = [], startedAt = 0;

      function destroy() {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = 0;
        if (runner) { Runner.stop(runner); runner = null; }
        if (engine) { engine = null; }
        bodies = [];
        ctx.clearRect(0, 0, 1920, 1080);
      }

      function start() {
        destroy();
        canvas.style.opacity = '1';
        grid.style.opacity = '0';

        engine = Engine.create({ enableSleeping: false });
        engine.gravity.y = 1.4;

        // Static floor — the black SPIN/OFFF band
        const floor = Bodies.rectangle(960, FLOOR_Y + 20, 1920, 40, { isStatic: true });
        const leftWall  = Bodies.rectangle(-40, 540, 80, 1080, { isStatic: true });
        const rightWall = Bodies.rectangle(1960, 540, 80, 1080, { isStatic: true });
        World.add(engine.world, [floor, leftWall, rightWall]);

        bodies = TILES.map((t, i) => {
          const w = (COL[t.col + 1] - COL[t.col]) * 0.88;
          const h = 240;
          // Start ABOVE the canvas, staggered across X, with random tilt
          const startX = 200 + Math.random() * 1520;
          const startY = -400 - i * 220;
          const body = Bodies.rectangle(startX, startY, w, h, {
            restitution: 0.34,
            friction: 0.28,
            frictionAir: 0.005,
            density: 0.0018,
            angle: (Math.random() - 0.5) * 0.45,
          });
          Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);
          body._color = COLOR_MAP[t.color] || t.color;
          body._w = w;
          body._h = h;
          return body;
        });
        World.add(engine.world, bodies);

        runner = Runner.create();
        Runner.run(runner, engine);
        startedAt = performance.now();

        const draw = () => {
          if (!engine) return;
          ctx.clearRect(0, 0, 1920, 1080);

          // Paint the black floor band so it looks continuous with the static layout
          ctx.fillStyle = BLACK;
          ctx.fillRect(0, FLOOR_Y, 1920, 1080 - FLOOR_Y);

          for (const b of bodies) {
            ctx.save();
            ctx.translate(b.position.x, b.position.y);
            ctx.rotate(b.angle);
            ctx.fillStyle = b._color;
            ctx.fillRect(-b._w / 2, -b._h / 2, b._w, b._h);
            ctx.restore();
          }
          rafId = requestAnimationFrame(draw);
        };
        draw();

        // After ~2.4s, crossfade canvas → static grid
        setTimeout(() => {
          if (!engine) return;
          canvas.style.opacity = '0';
          grid.style.opacity = '1';
          setTimeout(destroy, 900);
        }, 2400);
      }

      // Replay every time slide 01 is shown
      const deck = document.querySelector('deck-stage');
      deck.addEventListener('slidechange', (e) => {
        if (e.detail && e.detail.slide === slide) start();
      });

      // Catch case where slidechange already fired during script-load race
      if (slide.hasAttribute('data-active') ||
          slide.matches(':first-of-type')) {
        // First slide is the default active one; kick off physics now
        setTimeout(start, 50);
      }
    }
  }
})();
