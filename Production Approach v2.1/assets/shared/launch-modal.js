/**
 * Desktop-app launch modal.
 *
 * Mapping Matter 2 and Previz are desktop applications — they don't have
 * a web page in Octopus. Any click destined for `lens-mapping-matter.html`
 * or `lens-previz.html`, or any element carrying `data-launch="mm"` /
 * `data-launch="previz"`, is intercepted and replaced with a "will launch"
 * modal.
 *
 * Mount: <script src="assets/shared/launch-modal.js" defer></script>
 *
 * Programmatic API:
 *   window.showLaunchModal('mm' | 'previz')
 *   window.showMappingMatterModal()  // back-compat alias for 'mm'
 */
(function () {
  if (window.__launchModalLoaded) return;
  window.__launchModalLoaded = true;

  // ── Product catalog ─────────────────────────────────────────────────────
  // Add new desktop apps here; the script handles the rest.
  const PRODUCTS = {
    mm: {
      name: 'Mapping Matter 2',
      icon: 'assets/products/mapping-matter.svg',
      hrefs: ['lens-mapping-matter.html'],
      body: 'Mapping Matter 2 is a <b>desktop application</b>. Launching it will hand off your production context — projector layout, surfaces, brand pack — and open the scene on your machine.',
    },
    previz: {
      name: 'Previz',
      icon: 'assets/products/Previz.svg',
      hrefs: ['lens-previz.html'],
      body: 'Previz is a <b>desktop pre-visualisation app</b>. Launching it will hand off your production context — stage, cameras, scene layout, content cues — and open the simulation on your machine.',
    },
  };

  const CSS = `
.lm-overlay {
  position: fixed; inset: 0; z-index: 9999;
  background: rgba(8, 12, 24, 0.72);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  display: grid; place-items: center;
  opacity: 0; pointer-events: none;
  transition: opacity 200ms ease;
}
.lm-overlay.lm-open { opacity: 1; pointer-events: auto; }
.lm-dialog {
  background: #1D2939;
  border: 1px solid #344054;
  border-radius: 16px;
  padding: 32px 36px;
  max-width: 440px;
  width: 92%;
  text-align: center;
  box-shadow: 0 40px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04) inset;
  transform: translateY(8px) scale(0.96);
  opacity: 0;
  transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1), opacity 200ms ease;
  font-family: -apple-system, BlinkMacSystemFont, "Inter", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
}
.lm-overlay.lm-open .lm-dialog { transform: translateY(0) scale(1); opacity: 1; }
.lm-logo {
  width: 72px; height: 72px;
  margin: 0 auto 18px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(255,152,244,0.18), rgba(167,76,238,0.18));
  display: grid; place-items: center;
  position: relative;
}
.lm-logo::after {
  content: ""; position: absolute; inset: -6px;
  border-radius: 20px;
  background: linear-gradient(135deg, #FF98F4, #a74cee);
  opacity: 0.18; z-index: -1; filter: blur(12px);
}
.lm-logo img { width: 64px; height: 64px; border-radius: 14px; display: block; }
.lm-title {
  margin: 0 0 10px;
  font-size: 22px; font-weight: 600; color: #D0D5DD;
  letter-spacing: -0.012em; line-height: 1.2;
}
.lm-body {
  color: #98A2B3; font-size: 14px; line-height: 1.55;
  margin: 0 0 24px;
}
.lm-body b { color: #D0D5DD; font-weight: 600; }
.lm-actions {
  display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;
}
.lm-btn {
  padding: 10px 18px; border-radius: 9px;
  font-size: 13px; font-weight: 600; cursor: pointer;
  border: 1px solid transparent;
  font-family: inherit;
  display: inline-flex; align-items: center; gap: 7px;
  transition: filter 150ms, background 150ms, border-color 150ms, transform 150ms;
}
.lm-btn-primary {
  background: #FF98F4; color: #0a0a0c;
  box-shadow: 0 6px 14px -6px #FF98F4, inset 0 1px 0 rgba(255,255,255,0.25);
}
.lm-btn-primary:hover { filter: brightness(1.06); transform: translateY(-1px); }
.lm-btn-secondary {
  background: transparent; border-color: #344054; color: #D0D5DD;
}
.lm-btn-secondary:hover { background: #344054; }
.lm-btn svg { width: 14px; height: 14px; stroke-width: 2; }
.lm-hint {
  margin-top: 14px;
  font-size: 11px; color: #4E5D76;
  font-family: "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace;
  letter-spacing: 0.04em;
}
  `;

  function ensureStyles() {
    if (document.getElementById('lm-styles')) return;
    const style = document.createElement('style');
    style.id = 'lm-styles';
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  function buildOverlay(productKey) {
    const p = PRODUCTS[productKey];
    if (!p) return null;
    const overlay = document.createElement('div');
    overlay.className = 'lm-overlay';
    overlay.innerHTML = `
      <div class="lm-dialog" role="dialog" aria-labelledby="lm-title" aria-modal="true">
        <div class="lm-logo"><img src="${p.icon}" alt=""/></div>
        <h2 class="lm-title" id="lm-title">${p.name} will launch</h2>
        <p class="lm-body">${p.body}</p>
        <div class="lm-actions">
          <button class="lm-btn lm-btn-secondary" data-lm-close>Cancel</button>
          <button class="lm-btn lm-btn-primary" data-lm-close>
            Launch app
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
        <div class="lm-hint">esc to dismiss</div>
      </div>
    `;
    return overlay;
  }

  function showModal(productKey) {
    if (!PRODUCTS[productKey]) {
      console.warn('[launch-modal] Unknown product:', productKey);
      return;
    }
    ensureStyles();
    const overlay = buildOverlay(productKey);
    if (!overlay) return;
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('lm-open'));

    function close() {
      overlay.classList.remove('lm-open');
      setTimeout(() => overlay.remove(), 220);
      document.removeEventListener('keydown', onKey);
    }
    function onKey(e) {
      if (e.key === 'Escape') { e.preventDefault(); close(); }
    }
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay || (e.target.closest && e.target.closest('[data-lm-close]'))) {
        close();
      }
    });
    document.addEventListener('keydown', onKey);
  }

  // ── Identify a trigger ──────────────────────────────────────────────────
  function productFor(el) {
    if (!el || !el.getAttribute) return null;
    const dl = el.getAttribute('data-launch');
    if (dl && PRODUCTS[dl]) return dl;
    if (el.tagName === 'A') {
      const href = el.getAttribute('href') || '';
      for (const key of Object.keys(PRODUCTS)) {
        for (const h of PRODUCTS[key].hrefs) {
          if (href === h || href.endsWith('/' + h)) return key;
        }
      }
    }
    return null;
  }

  document.addEventListener('click', (e) => {
    let el = e.target;
    while (el && el !== document.body) {
      const key = productFor(el);
      if (key) {
        e.preventDefault();
        e.stopPropagation();
        showModal(key);
        return;
      }
      el = el.parentElement;
    }
  }, true);

  // Public API
  window.showLaunchModal = showModal;
  window.showMappingMatterModal = () => showModal('mm');   // back-compat
  window.showPrevizModal = () => showModal('previz');
})();
