import './domain.css';
import { icons } from '../primitives/icons.js';

export const createTopNav = ({
  cartCount = 1,
  initials = 'W',
  mobile = false,
  showBrand = true,
} = {}) => {
  const root = document.createElement('header');
  root.className = 'do-topnav' + (mobile ? ' do-topnav--mobile' : '');
  const cart = `
    <span class="do-topnav__cart" aria-label="Cart, ${cartCount} items">
      <span style="width:24px;height:24px;color:var(--do-text);">${icons.shop}</span>
      ${cartCount > 0 ? `<span class="do-topnav__cart-badge">${cartCount}</span>` : ''}
    </span>`;
  if (mobile && showBrand) {
    root.innerHTML = `
      <div class="do-topnav__brand">
        <img src="brand/Disguise_Logo_Mark.svg" alt="Disguise" style="height:24px;" />
      </div>
      <div style="display:inline-flex;gap:8px;align-items:center;">
        ${cart}
        <button class="do-topnav__btn" aria-label="Menu" style="width:36px;height:36px;">${icons.menuOpen}</button>
      </div>`;
  } else {
    root.innerHTML = `
      <button class="do-topnav__btn" aria-label="Toggle theme">${icons.nightlight}</button>
      <button class="do-topnav__btn" aria-label="Language">${icons.language}</button>
      ${cart}
      <div class="do-topnav__avatar" aria-label="Workspace">${initials}</div>
      <button class="do-topnav__btn" aria-label="Account">${icons.person}</button>`;
  }
  return root;
};
