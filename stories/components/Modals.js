import './domain.css';
import { icons } from '../primitives/icons.js';
import { createButton } from '../primitives/Button.js';
import { createAddProductCard, createRemoveProductCard, createAddLicenseCard, createRemoveLicenseCard } from './BannerCards.js';
import { createProductCard } from './ProductCard.js';

const modalShell = ({ title, subtitle, width = 520, body, footer }) => {
  const panel = document.createElement('section');
  panel.className = 'do-panel';
  panel.style.width = `${width}px`;
  panel.style.boxShadow = '0 24px 48px -12px rgba(16,24,40,0.25)';
  panel.innerHTML = `
    <header class="do-panel__header">
      <div>
        <h3 class="do-panel__title">${title}</h3>
        ${subtitle ? `<p style="margin:2px 0 0;font-size:12px;color:var(--do-text-passive);">${subtitle}</p>` : ''}
      </div>
      <button class="do-row__iconbtn" aria-label="Close">${icons.close}</button>
    </header>
    <div class="do-panel__body" data-body></div>
    <footer class="do-panel__footer" data-footer></footer>`;
  panel.querySelector('[data-body]').append(...body);
  panel.querySelector('[data-footer]').append(...footer);
  const stage = document.createElement('div');
  stage.className = 'do-modal-stage';
  stage.appendChild(panel);
  return stage;
};

export const createPendingModal = ({
  pending = [
    { kind: 'add-product', product: 'Designer Pro', productSlug: 'Designer Pro' },
    { kind: 'remove-license', product: 'Renderstream', productSlug: 'Renderstream' },
    { kind: 'add-license', product: 'Mapping Matter', productSlug: 'Mapping_Matter' },
  ],
} = {}) => {
  const factories = {
    'add-product': createAddProductCard,
    'remove-product': createRemoveProductCard,
    'add-license': createAddLicenseCard,
    'remove-license': createRemoveLicenseCard,
  };
  const body = pending.map((p) => factories[p.kind](p));
  return modalShell({
    title: 'Review pending changes',
    subtitle: 'Confirm scheduled adjustments before they apply at your next renewal.',
    width: 760,
    body,
    footer: [
      createButton({ label: 'Discard pending', variant: 'ghost', leadingIcon: false }),
      createButton({ label: 'Confirm all', variant: 'accent', leadingIcon: false }),
    ],
  });
};

export const createAddProductModal = ({
  products = [
    { product: 'Designer Pro', productSlug: 'Designer Pro', description: 'Professional toolchain for production rigging and rehearsals', price: '$1,299', licenses: 1 },
    { product: 'Renderstream', productSlug: 'Renderstream', description: 'High-performance render output and broadcast pipelines', price: '$3,499', licenses: 1 },
    { product: 'X1', productSlug: 'X1', description: 'Compact playback server for studio and AR floors', price: '$12,000', licenses: 1 },
  ],
} = {}) => {
  const body = products.map((p) => createProductCard(p));
  return modalShell({
    title: 'Add products to subscription',
    subtitle: 'Pick products to add. Charges are prorated for the remainder of your current cycle.',
    width: 920,
    body,
    footer: [
      createButton({ label: 'Cancel', variant: 'ghost', leadingIcon: false }),
      createButton({ label: 'Add to cart', variant: 'primary', leadingIcon: false }),
    ],
  });
};
