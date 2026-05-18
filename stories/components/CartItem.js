import './domain.css';
import { icons } from '../primitives/icons.js';

export const createCartItem = ({
  product = 'Disguise X1',
  productSlug = 'X1',
  startDate = '01/01/2025',
  licenses = 2,
  unitPrice = '$12,000',
  totalPrice = '$24,000',
  onRemove,
} = {}) => {
  const root = document.createElement('article');
  root.className = 'do-cart-item';

  const thumb = document.createElement('div');
  thumb.className = 'do-cart-item__thumb';
  thumb.innerHTML = `<img src="${encodeURI(productSlug)}_32.svg" alt="${product}" />`;
  root.appendChild(thumb);

  const body = document.createElement('div');
  body.className = 'do-cart-item__body';
  body.innerHTML = `
    <p class="do-cart-item__title">${product}</p>
    <p class="do-cart-item__meta">Start: ${startDate}</p>
    <p class="do-cart-item__meta">Licenses: ${licenses}</p>`;
  root.appendChild(body);

  const right = document.createElement('div');
  right.style.cssText = 'display:flex;flex-direction:column;align-items:flex-end;gap:4px;text-align:right;';
  right.innerHTML = `
    <span class="do-cart-item__price">${totalPrice}</span>
    <span class="do-cart-item__meta">${unitPrice} ea.</span>`;
  root.appendChild(right);

  const close = document.createElement('button');
  close.type = 'button';
  close.setAttribute('aria-label', 'Remove from cart');
  close.style.cssText = 'border:0;background:transparent;width:24px;height:24px;color:var(--do-text-passive);cursor:pointer;display:inline-flex;align-items:center;justify-content:center;';
  close.innerHTML = icons.close;
  if (onRemove) close.addEventListener('click', onRemove);
  root.appendChild(close);

  return root;
};
