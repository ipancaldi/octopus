/*
 * Shared production sidebar
 * --------------------------
 * Injects the phase-grouped lens sidebar into any production-context page.
 *
 * Usage in HTML:
 *   <aside class="side" data-prod-sidebar></aside>
 *   <script src="assets/shared/sidebar.js" defer></script>
 *
 * The script auto-detects the current page via window.location.pathname and
 * adds .is-current to the matching lens item.
 */
(function () {
  const SIDEBAR_HTML = `
    <a class="back" href="productions-grid.html">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 6l-6 6 6 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      All productions
    </a>
    <div class="prod-name">Eurovision Song Contest 2026</div>
    <div style="display:flex;gap:6px;flex-wrap:wrap;">
      <span class="pill rehearsal"><span class="dot"></span> Design phase</span>
      <span class="pill" style="background:var(--violet-bg);color:var(--violet-ink);">Vienna · 9 days</span>
    </div>
    <div class="prod-sub">May 8 – 16, 2026 · 3 live shows · Stadthalle</div>

    <hr>

    <div class="nav-list">
      <a class="item" data-lens="home" href="production-home.html"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke-width="1.7"/><rect x="14" y="3" width="7" height="7" rx="1.5" stroke-width="1.7"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke-width="1.7"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke-width="1.7"/></svg></span>Home</a>
    </div>

    <hr>

    <div class="group-label"><span>Lenses</span><span style="font-family:'JetBrains Mono',monospace;color:var(--grey-6);text-transform:none;letter-spacing:0;">6 / 13 active</span></div>

    <div class="phase-section done">
      <div class="phase-header" data-ph-header><span class="num">01</span><span class="name">Pitch</span><span class="state">✓</span></div>
      <div class="nav-list">
      <a class="item" data-lens="aid3n" href="lens-aid3n.html"><img class="pico" src="assets/products/aid3n.svg" alt="" />Aid3n<span class="count">4</span></a>
      <a class="item" data-lens="wiki" href="lens-wiki.html"><span class="ico" style="color:var(--wiki);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 4h14v16H8a3 3 0 01-3-3V4z" stroke-width="1.7"/><path d="M9 9h6M9 13h6" stroke-width="1.7" stroke-linecap="round"/></svg></span>Wiki<span class="count">7</span></a>
      <a class="item" data-lens="previz" href="lens-previz.html"><img class="pico" src="assets/products/Previz.svg" alt="" />Previz</a>
      </div>
    </div>

    <div class="phase-section current">
      <div class="phase-header" data-ph-header><span class="num">02</span><span class="name">Design</span><span class="state">NOW</span></div>
      <div class="nav-list">
      <a class="item" data-lens="mm" href="lens-mapping-matter.html"><img class="pico" src="assets/products/mapping-matter.svg" alt="" />Mapping Matter 2<span class="count">78</span></a>
      <a class="item" data-lens="schem" href="lens-system-design.html"><span class="ico" style="color:var(--schem);"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="6" height="6" rx="1" stroke-width="1.7"/><rect x="15" y="3" width="6" height="6" rx="1" stroke-width="1.7"/><rect x="9" y="15" width="6" height="6" rx="1" stroke-width="1.7"/><path d="M9 6h6M6 9v6h6M18 9v6h-6" stroke-width="1.7"/></svg></span>System Design</a>
      <a class="item" data-lens="takes" href="lens-takes.html"><span class="ico" style="color:var(--takes);"><svg viewBox="0 0 20 21" fill="currentColor"><path d="M17.4446 19.1187V20.6187H2.8137V19.1187H17.4446ZM17.9446 18.6187V10.5854H2.3137V18.6187C2.3137 18.8948 2.53756 19.1187 2.8137 19.1187V20.6187L2.6096 20.6079C1.66805 20.5125 0.919901 19.7643 0.824444 18.8228L0.813702 18.6187V9.08545H19.4446V18.6187L19.4338 18.8228C19.3384 19.7642 18.5901 20.5123 17.6487 20.6079L17.4446 20.6187V19.1187C17.7206 19.1185 17.9446 18.8947 17.9446 18.6187Z"/><path d="M16.6158 1.87062C16.5443 1.60396 16.2701 1.44575 16.0034 1.51706L1.87109 5.30381C1.60435 5.37528 1.44606 5.64945 1.51753 5.91618L1.87442 7.2481L16.9727 3.20254L16.6158 1.87062ZM18.8098 4.2632L0.813702 9.08545L0.0686447 6.30441C-0.217239 5.23748 0.415927 4.1408 1.48286 3.85492L15.6152 0.0681738L15.8151 0.0257246C16.8158 -0.136424 17.7966 0.482106 18.0647 1.48239L18.8098 4.2632Z"/><path d="M1.73454 4.01073L3.66639 3.4931L2.8393 8.49343L0.907445 9.01107L1.73454 4.01073Z"/><path d="M6.16725 2.8717L8.0991 2.35406L7.27201 7.3544L5.34016 7.87204L6.16725 2.8717Z"/><path d="M10.4182 1.73267L12.35 1.21503L11.5229 6.21537L9.59108 6.733L10.4182 1.73267Z"/><path d="M14.6691 0.59364L16.6009 0.0760022L15.7739 5.07633L13.842 5.59397L14.6691 0.59364Z"/></svg></span>Takes<span class="count">2</span></a>
      </div>
    </div>

    <div class="phase-section future">
      <div class="phase-header" data-ph-header><span class="num">03</span><span class="name">Procurement</span></div>
      <div class="nav-list">
      <div class="item locked" data-lens="inventory"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 7l9-4 9 4-9 4-9-4z" stroke-width="1.7" stroke-linejoin="round"/><path d="M3 12l9 4 9-4M3 17l9 4 9-4" stroke-width="1.7" stroke-linejoin="round"/></svg></span>Inventory<span class="lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg></span></div>
      </div>
    </div>

    <div class="phase-section future">
      <div class="phase-header" data-ph-header><span class="num">04</span><span class="name">Rehearsal</span></div>
      <div class="nav-list">
      <div class="item locked" data-lens="designer"><img class="pico" src="assets/products/designer.svg" alt="" />Designer<span class="lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg></span></div>
      <div class="item locked" data-lens="porta"><img class="pico" src="assets/products/porta.svg" alt="" />Porta<span class="lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg></span></div>
      </div>
    </div>

    <div class="phase-section future">
      <div class="phase-header" data-ph-header><span class="num">05</span><span class="name">Show</span></div>
      <div class="nav-list">
      <a class="item locked" data-lens="supp" href="lens-support.html"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9" stroke-width="1.7"/><path d="M9 9a3 3 0 116 0c0 2-3 2-3 4M12 17.5h.01" stroke-width="1.7" stroke-linecap="round"/></svg></span>Support<span class="lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg></span></a>
      <div class="item locked" data-lens="live-mon"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 12h3l2-6 4 12 2-6 2 3h5" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Live monitoring<span class="lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg></span></div>
      </div>
    </div>

    <div class="phase-section future">
      <div class="phase-header" data-ph-header><span class="num">06</span><span class="name">Wrap</span></div>
      <div class="nav-list">
      <div class="item locked" data-lens="exports"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 16V4M6 10l6-6 6 6M4 20h16" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg></span>Exports<span class="lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg></span></div>
      <div class="item locked" data-lens="decisions"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="5" y="5" width="14" height="14" rx="1" stroke-width="1.7"/><path d="M9 9h6M9 13h4" stroke-width="1.7" stroke-linecap="round"/></svg></span>Decisions log<span class="lock"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg></span></div>
      </div>
    </div>

    <hr>

    <div class="group-label"><span>Production</span></div>
    <div class="nav-list">
      <a class="item" data-lens="team" href="prod-team.html"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="9" cy="8" r="3.5" stroke-width="1.7"/><path d="M2.5 20.5c0-3 3-5.5 6.5-5.5s6.5 2.5 6.5 5.5" stroke-width="1.7" stroke-linecap="round"/></svg></span>Team<span class="count">9</span></a>
      <a class="item" data-lens="schedule" href="prod-schedule.html"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="5" width="18" height="16" rx="2" stroke-width="1.7"/><path d="M3 9h18M8 3v4M16 3v4" stroke-width="1.7"/></svg></span>Schedule</a>
      <a class="item" data-lens="settings" href="prod-settings.html"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="3" stroke-width="1.7"/><path d="M12 4v3M12 17v3M4 12h3M17 12h3" stroke-width="1.7" stroke-linecap="round"/></svg></span>Settings</a>
    </div>
  `;

  // Self-contained sidebar styles — injected once into <head>
  const SIDEBAR_CSS = `
    /* Container */
    aside.side[data-prod-sidebar] {
      background:#131D2E !important;
      border-right:1px solid var(--line, #344054);
      padding:24px 18px;
      display:flex; flex-direction:column; gap:4px;
      overflow-y:auto;
    }

    /* Back link */
    aside.side[data-prod-sidebar] .back { display:inline-flex; align-items:center; gap:8px; color:var(--grey-6, #98A2B3); font-size:12px; cursor:pointer; margin-bottom:14px; text-decoration:none; }
    aside.side[data-prod-sidebar] .back:hover { color:var(--ink, #D0D5DD); }
    aside.side[data-prod-sidebar] .back svg { width:14px; height:14px; stroke-width:1.8; }

    /* Production header */
    aside.side[data-prod-sidebar] .prod-name { font-size:17px; font-weight:600; line-height:1.25; margin-bottom:8px; color:var(--ink, #D0D5DD); }
    aside.side[data-prod-sidebar] .prod-sub  { font-size:12px; color:var(--grey-6, #98A2B3); margin-top:8px; line-height:1.5; }
    aside.side[data-prod-sidebar] .pill { padding:3px 9px; border-radius:999px; font-size:11px; font-weight:600; display:inline-flex; align-items:center; gap:6px; }
    aside.side[data-prod-sidebar] .pill .dot { width:6px; height:6px; border-radius:50%; background:currentColor; }
    aside.side[data-prod-sidebar] .pill.rehearsal { color:var(--amber-ink, #FFE6DD); background:var(--amber-bg, #48324C); }
    aside.side[data-prod-sidebar] hr { border:none; border-top:1px solid var(--line, #344054); margin:16px 0; width:100%; }

    /* Group label */
    aside.side[data-prod-sidebar] .group-label { font-size:10px; color:var(--grey-5, #4E5D76); letter-spacing:0.08em; text-transform:uppercase; padding:0 8px 8px; display:flex; align-items:center; justify-content:space-between; font-weight:600; }

    /* Item layout */
    aside.side[data-prod-sidebar] .nav-list { display:flex; flex-direction:column; gap:1px; margin-bottom:6px; }
    aside.side[data-prod-sidebar] .nav-list .item { display:flex; align-items:center; gap:10px; padding:8px 10px; border-radius:8px; cursor:pointer; font-size:13px; color:var(--grey-7, #D0D5DD); text-decoration:none; }
    aside.side[data-prod-sidebar] .nav-list .item:hover { background:var(--grey-2, #344054); }
    aside.side[data-prod-sidebar] .nav-list .item .ico { width:18px; height:18px; display:grid; place-items:center; flex-shrink:0; }
    aside.side[data-prod-sidebar] .nav-list .item .ico svg { width:18px; height:18px; stroke-width:1.6; }
    aside.side[data-prod-sidebar] .nav-list .item .count { margin-left:auto; font-size:11px; color:var(--grey-5, #4E5D76); }
    aside.side[data-prod-sidebar] .nav-list .item .lock { display:inline-flex; align-items:center; margin-left:auto; color:var(--grey-5, #4E5D76); }
    aside.side[data-prod-sidebar] .nav-list .item .lock svg { width:11px; height:11px; stroke-width:2; }
    aside.side[data-prod-sidebar] .nav-list .item .pico { width:18px; height:18px; border-radius:4px; flex-shrink:0; }
    aside.side[data-prod-sidebar] .nav-list .item.is-current { background:var(--pink-soft, rgba(255,152,244,0.10)); color:var(--ink, #D0D5DD); font-weight:500; }
    aside.side[data-prod-sidebar] .nav-list .item.locked { opacity:0.55; cursor:not-allowed; }
    aside.side[data-prod-sidebar] .nav-list .item.locked:hover { background:transparent; }
    aside.side[data-prod-sidebar] .nav-list .item.locked .pico { opacity:0.4; filter:grayscale(0.7); }
    aside.side[data-prod-sidebar] .nav-list .item.locked .ico { color:var(--grey-5, #4E5D76); }

    aside.side[data-prod-sidebar] .phase-section { display:flex; flex-direction:column; gap:1px; margin:0 0 6px 14px; padding-left:10px; border-left:1px solid var(--line, #344054); position:relative; }
    aside.side[data-prod-sidebar] .phase-section::before { content:""; position:absolute; left:-4px; top:14px; width:7px; height:7px; border-radius:50%; background:var(--grey-4, #4F5F79); border:1.5px solid #131D2E; }
    aside.side[data-prod-sidebar] .phase-section.done::before    { background:var(--green-ink, #6BFFDC); }
    aside.side[data-prod-sidebar] .phase-section.current::before { background:var(--pink, #FF98F4); box-shadow:0 0 0 3px rgba(255,109,240,0.18); }
    aside.side[data-prod-sidebar] .phase-section.future::before  { background:transparent; border-color:var(--grey-4, #4F5F79); }
    aside.side[data-prod-sidebar] .phase-header { display:flex; align-items:center; gap:8px; padding:8px 8px 4px; font-size:10px; letter-spacing:0.06em; text-transform:uppercase; font-family:"JetBrains Mono",ui-monospace,monospace; font-weight:600; }
    aside.side[data-prod-sidebar] .phase-header .num   { color:var(--grey-5, #4E5D76); }
    aside.side[data-prod-sidebar] .phase-header .name  { color:var(--grey-6, #98A2B3); flex:1; }
    aside.side[data-prod-sidebar] .phase-header .state { color:var(--grey-5, #4E5D76); }
    aside.side[data-prod-sidebar] .phase-section.done .phase-header .num,
    aside.side[data-prod-sidebar] .phase-section.done .phase-header .state { color:var(--green-ink, #6BFFDC); }
    aside.side[data-prod-sidebar] .phase-section.done .phase-header .name  { color:var(--grey-7, #D0D5DD); }
    aside.side[data-prod-sidebar] .phase-section.current .phase-header .num  { color:var(--pink, #FF98F4); }
    aside.side[data-prod-sidebar] .phase-section.current .phase-header .name { color:var(--ink, #D0D5DD); font-weight:700; }
    aside.side[data-prod-sidebar] .phase-section.current .phase-header .state {
      background:var(--pink, #FF98F4); color:#0a0a0c; padding:1px 6px; border-radius:4px;
      font-size:9px; font-weight:700; letter-spacing:0.06em;
    }
  `;

  // Inject CSS once
  if (!document.getElementById('prod-sidebar-css')) {
    const style = document.createElement('style');
    style.id = 'prod-sidebar-css';
    style.textContent = SIDEBAR_CSS;
    document.head.appendChild(style);
  }

  // Inject sidebar markup into any element matching [data-prod-sidebar]
  function render() {
    const targets = document.querySelectorAll('[data-prod-sidebar]');
    targets.forEach(el => {
      el.innerHTML = SIDEBAR_HTML;
    });

    // Auto-detect current page
    const path = (window.location.pathname.split('/').pop() || '').toLowerCase();
    const PAGE_TO_LENS = {
      'production-home.html': 'home',
      '': 'home',
      'lens-aid3n.html': 'aid3n',
      'lens-mapping-matter.html': 'mm',
      'lens-system-design.html': 'schem',
      'lens-takes.html': 'takes',
      'lens-support.html': 'supp',
      'lens-wiki.html': 'wiki',
      'lens-previz.html': 'previz',
      'prod-team.html': 'team',
      'prod-schedule.html': 'schedule',
      'prod-settings.html': 'settings',
    };
    const currentLens = PAGE_TO_LENS[path];
    if (currentLens) {
      targets.forEach(el => {
        const item = el.querySelector(`[data-lens="${currentLens}"]`);
        if (item) item.classList.add('is-current');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
