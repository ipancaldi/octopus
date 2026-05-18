import './domain.css';
import { createToggle } from '../primitives/Toggle.js';
import { icons } from '../primitives/icons.js';

const banner = ({
  variant = 'add', // 'add' | 'remove'
  product = 'Designer Pro',
  productSlug = 'Designer Pro',
  endDate = '12/03/2026',
  hint = 'Add now for a prorated charge for the rest of the billing cycle.',
  scope = 'product', // 'product' | 'license'
  immediateLabel = 'Add Now',
  immediate = false,
}) => {
  const root = document.createElement('div');
  root.className = `do-banner-card do-banner-card--${variant}`;

  const headline = variant === 'add'
    ? (scope === 'product'
        ? `<strong>${product}</strong> will be added at the end of cycle.`
        : `An additional license for <strong>${product}</strong> will be added.`)
    : (scope === 'product'
        ? `<strong>${product}</strong> will be removed at the end of cycle.`
        : `A license for <strong>${product}</strong> will be removed.`);

  const thumb = document.createElement('div');
  thumb.className = 'do-banner-card__thumb';
  thumb.innerHTML = `<img src="${encodeURI(productSlug)}_32.svg" alt="${product}" />`;
  root.appendChild(thumb);

  const body = document.createElement('div');
  body.className = 'do-banner-card__body';
  body.innerHTML = `
    <p class="do-banner-card__copy">${headline}</p>
    <div class="do-banner-card__hint">
      <span>${icons.visibility}</span>
      <span>${hint}</span>
    </div>`;
  root.appendChild(body);

  const aside = document.createElement('div');
  aside.className = 'do-banner-card__aside';
  aside.innerHTML = `
    <div class="do-banner-card__when">
      <span>${icons.calendar}</span>
      <span>${endDate}</span>
      <span class="do-banner-card__pending-tag">Pending ${variant === 'add' ? 'Updates' : 'Removal'}</span>
    </div>
    <div class="do-banner-card__choice">
      <span class="do-banner-card__toggle"></span>
      <span>${immediateLabel}</span>
    </div>`;
  aside.querySelector('.do-banner-card__toggle').appendChild(createToggle({ on: immediate }));
  root.appendChild(aside);

  return root;
};

export const createAddProductCard = (args = {}) => banner({ variant: 'add', scope: 'product', immediateLabel: 'Add Now', ...args });
export const createRemoveProductCard = (args = {}) => banner({ variant: 'remove', scope: 'product', immediateLabel: 'Remove Now', ...args });
export const createAddLicenseCard = (args = {}) => banner({ variant: 'add', scope: 'license', immediateLabel: 'Add Now', ...args });
export const createRemoveLicenseCard = (args = {}) => banner({ variant: 'remove', scope: 'license', immediateLabel: 'Remove Now', ...args });
