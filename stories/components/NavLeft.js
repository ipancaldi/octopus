import './domain.css';
import { icons } from '../primitives/icons.js';

const DEFAULT_ITEMS = [
  { label: 'Dashboard', icon: 'home', current: true },
  { label: 'Workspace', icon: 'person' },
  { label: 'Our Software', icon: 'pkg' },
  { label: 'Subscriptions & Licenses', icon: 'card' },
  { label: 'Downloads', icon: 'download' },
  { label: 'Spaces', icon: 'folder' },
  { label: 'Knowledge', icon: 'book' },
  { label: 'Support', icon: 'help' },
];

const COMING_SOON = [
  { label: 'Community', icon: 'group', disabled: true },
  { label: 'Marketplace', icon: 'shop', disabled: true },
  { label: 'Jobs', icon: 'work', disabled: true },
];

export const createNavLeft = ({
  items = DEFAULT_ITEMS,
  comingSoon = COMING_SOON,
  storageUsedGB = 0.136,
  storageTotalGB = 1000,
  notifications = 1,
  collapsed = false,
} = {}) => {
  const root = document.createElement('nav');
  root.className = 'do-navleft' + (collapsed ? ' do-navleft--collapsed' : '');
  const itemHtml = (it) => `
    <button class="do-navleft__item" ${it.current ? 'aria-current="page"' : ''} ${it.disabled ? 'data-disabled="true"' : ''} ${collapsed ? `title="${it.label}"` : ''}>
      <span class="do-navleft__icon">${icons[it.icon] ?? ''}</span>
      <span>${it.label}</span>
    </button>`;
  const pct = Math.min(100, (storageUsedGB / storageTotalGB) * 100);

  if (collapsed) {
    root.innerHTML = `
      <div class="do-navleft__brand">
        <span class="do-navleft__brand-lockup" aria-label="Disguise">
          <img src="brand/Disguise_Logo_Mark.svg" alt="Disguise" />
        </span>
        <button class="do-navleft__menu-btn" aria-label="Expand navigation">${icons.leftPanelOpen}</button>
      </div>
      <div class="do-navleft__group">${items.map(itemHtml).join('')}</div>
      <div class="do-navleft__group do-navleft__group--hidden">${comingSoon.map(itemHtml).join('')}</div>
      <div class="do-navleft__footer">
        <button class="do-navleft__footer-item" aria-label="Notifications" title="Notifications">
          ${icons.bell}
          ${notifications > 0 ? `<span style="position:absolute;top:6px;right:10px;width:8px;height:8px;border-radius:50%;background:var(--do-pink);"></span>` : ''}
        </button>
        <div class="do-navleft__footer-item" title="Storage" style="flex-direction:column;height:auto;gap:2px;">
          ${icons.hardDrive}
          <span class="do-navleft__storage-pct">${pct.toFixed(1)}%</span>
        </div>
      </div>`;
    return root;
  }

  root.innerHTML = `
    <div class="do-navleft__brand">
      <span class="do-navleft__brand-lockup" aria-label="Disguise">
        <img src="brand/Disguise_Logo_Landscape.svg" alt="Disguise" />
      </span>
      <button class="do-navleft__menu-btn" aria-label="Collapse navigation">${icons.rightPanelClose}</button>
    </div>
    <div class="do-navleft__group">${items.map(itemHtml).join('')}</div>
    <div class="do-navleft__group">
      <div class="do-navleft__caption">Coming Soon</div>
      ${comingSoon.map(itemHtml).join('')}
    </div>
    <div class="do-navleft__footer" style="display:flex;flex-direction:column;gap:8px;">
      <button class="do-navleft__item" style="height:auto;padding:8px 12px;justify-content:space-between;">
        <span style="display:inline-flex;align-items:center;gap:12px;">
          <span class="do-navleft__icon" style="position:relative;">
            ${icons.bell}
            ${notifications > 0 ? `<span style="position:absolute;top:0;right:0;width:8px;height:8px;border-radius:50%;background:var(--do-pink);display:inline-block;"></span>` : ''}
          </span>
          <span>Notifications</span>
        </span>
        <span class="do-navleft__icon" style="width:18px;height:18px;color:var(--do-text-passive);">${icons.chevronRight}</span>
      </button>
      <div>
        <div style="display:flex;align-items:center;gap:8px;color:var(--do-text);font-size:14px;margin-bottom:8px;">
          <span class="do-navleft__icon" style="width:20px;height:20px;">${icons.hardDrive}</span>
          Storage
        </div>
        <div class="do-navleft__storage-bar"><div class="do-navleft__storage-fill" style="width:${pct}%"></div></div>
        <div style="margin-top:6px;font-size:12px;color:var(--do-text);">${storageUsedGB}  /  ${storageTotalGB} GB</div>
      </div>
    </div>`;
  return root;
};
