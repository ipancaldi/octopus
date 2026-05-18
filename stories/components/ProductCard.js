import './domain.css';
import { createCheckbox } from '../primitives/Checkbox.js';
import { icons } from '../primitives/icons.js';

export const createProductCard = ({
  product = 'Designer Starter',
  productSlug = 'Designer Starter',
  description = 'Perfect for learning and exploring Disguise with free access',
  price = '$159',
  licenses = 2,
  selected = false,
  onQtyChange,
} = {}) => {
  const root = document.createElement('div');
  root.className = 'do-product-card';

  const check = createCheckbox({ checked: selected });
  root.appendChild(check);

  const thumb = document.createElement('div');
  thumb.className = 'do-product-card__thumb';
  thumb.innerHTML = `<img src="${encodeURI(productSlug)}_68.svg" alt="${product}" />`;
  root.appendChild(thumb);

  const body = document.createElement('div');
  body.className = 'do-product-card__body';
  body.innerHTML = `
    <h3 class="do-product-card__title">${product}</h3>
    <p class="do-product-card__desc">${description}</p>`;
  root.appendChild(body);

  const aside = document.createElement('div');
  aside.className = 'do-product-card__aside';
  aside.innerHTML = `
    <p class="do-product-card__price">${price}</p>
    <p style="margin:0;font-size:12px;color:var(--do-text);">Licenses</p>
    <div class="do-product-card__qty">
      <button class="do-product-card__qty-btn" aria-label="Decrease">${icons.close.replace(/d="M4 4l8 8M12 4l-8 8"/, 'd="M4 8h8"')}</button>
      <input class="do-product-card__qty-input" type="number" value="${licenses}" min="0" />
      <button class="do-product-card__qty-btn" aria-label="Increase">${icons.add}</button>
    </div>`;
  const input = aside.querySelector('input');
  aside.querySelector('.do-product-card__qty-btn:first-of-type').addEventListener('click', () => {
    input.value = Math.max(0, Number(input.value) - 1);
    onQtyChange?.(Number(input.value));
  });
  aside.querySelector('.do-product-card__qty-btn:last-of-type').addEventListener('click', () => {
    input.value = Number(input.value) + 1;
    onQtyChange?.(Number(input.value));
  });
  root.appendChild(aside);
  return root;
};
