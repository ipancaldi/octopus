/**
 * Production sidebar collapse toggle.
 *
 * Injects a single chevron button at the right edge of the production
 * sidebar (or workspace nav) that hides/shows the .side column.
 * Persists open/closed state in localStorage so it stays consistent
 * across pages.
 *
 * Mount: <script src="assets/shared/side-toggle.js" defer></script>
 */
(function () {
  if (window.__sideToggleLoaded) return;
  window.__sideToggleLoaded = true;

  const STORAGE_KEY = 'octopus-side-collapsed';

  const CSS = `
  /* ── Dark-mode scrollbars (Webkit + Firefox) ── */
  * { scrollbar-width: thin; scrollbar-color: #344054 transparent; }
  ::-webkit-scrollbar { width: 10px; height: 10px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb {
    background: #344054;
    border-radius: 6px;
    border: 2px solid transparent;
    background-clip: padding-box;
  }
  ::-webkit-scrollbar-thumb:hover { background: #4F5F79; background-clip: padding-box; border: 2px solid transparent; }
  ::-webkit-scrollbar-corner { background: transparent; }

  /* Give the breadcrumb room to clear the floating toggle button */
  .main-top { padding-left: 56px; }

  .app { transition: grid-template-columns 0.28s cubic-bezier(0.22, 1, 0.36, 1); }
  body.side-collapsed .app { grid-template-columns: 72px 0px 1fr !important; }
  .app > .side {
    overflow-x: hidden; min-width: 0;
    transition: padding 0.24s ease, opacity 0.18s ease;
  }
  body.side-collapsed .app > .side {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  body.side-collapsed .app > .side > * {
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.14s ease;
  }

  .side-toggle {
    position: fixed;
    top: 18px;
    left: 348px; /* rail (72) + side (280) - 4 (overlap) */
    width: 22px; height: 30px;
    border: 1px solid #344054;
    border-left: none;
    background: #1D2939;
    color: #98A2B3;
    border-radius: 0 8px 8px 0;
    cursor: pointer;
    display: grid;
    place-items: center;
    z-index: 1000;
    padding: 0;
    box-shadow: 4px 0 12px -6px rgba(0,0,0,0.4);
    transition:
      left 0.28s cubic-bezier(0.22, 1, 0.36, 1),
      background 0.15s ease,
      color 0.15s ease;
  }
  .side-toggle:hover { background: #344054; color: #D0D5DD; }
  .side-toggle:focus-visible { outline: 2px solid #FF98F4; outline-offset: 2px; }
  .side-toggle svg {
    width: 12px; height: 12px; stroke-width: 2.2;
    transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
  }
  body.side-collapsed .side-toggle { left: 72px; }
  body.side-collapsed .side-toggle svg { transform: rotate(180deg); }
  `;

  function injectStyle() {
    if (document.getElementById('side-toggle-style')) return;
    const s = document.createElement('style');
    s.id = 'side-toggle-style';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  function injectButton() {
    if (document.getElementById('side-toggle')) return;
    const btn = document.createElement('button');
    btn.id = 'side-toggle';
    btn.className = 'side-toggle';
    btn.setAttribute('title', 'Toggle sidebar (Cmd / Ctrl + B)');
    btn.setAttribute('aria-label', 'Toggle sidebar');
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    btn.addEventListener('click', toggle);
    document.body.appendChild(btn);
  }

  function toggle() {
    const collapsed = document.body.classList.toggle('side-collapsed');
    try { localStorage.setItem(STORAGE_KEY, collapsed ? '1' : '0'); } catch (e) {}
  }

  function applyStored() {
    try {
      if (localStorage.getItem(STORAGE_KEY) === '1') {
        document.body.classList.add('side-collapsed');
      }
    } catch (e) {}
  }

  function init() {
    // Only mount on pages that actually have a sidebar column.
    if (!document.querySelector('.app > .side')) return;
    injectStyle();
    applyStored();
    injectButton();
  }

  // Keyboard shortcut: Cmd/Ctrl + B
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'b') {
      e.preventDefault();
      toggle();
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
