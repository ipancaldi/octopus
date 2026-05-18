import './domain.css';
import { icons } from '../primitives/icons.js';
import { createProductCard } from './ProductCard.js';
import { createButton } from '../primitives/Button.js';

const DEFAULT_PRODUCTS = [
  { product: 'Designer Pro', productSlug: 'Designer Pro', description: 'Professional toolchain for production rigging and rehearsals', price: '$1,299', licenses: 5, selected: true },
  { product: 'Renderstream', productSlug: 'Renderstream', description: 'High-performance render output and broadcast pipelines', price: '$3,499', licenses: 2 },
  { product: 'Mapping Matter', productSlug: 'Mapping_Matter', description: 'Multi-projector mapping for complex stage geometry', price: '$899', licenses: 2 },
];

export const createLicenseManagementPanel = ({ products = DEFAULT_PRODUCTS } = {}) => {
  const root = document.createElement('section');
  root.className = 'do-panel';
  root.style.width = '900px';
  root.innerHTML = `
    <header class="do-panel__header">
      <div>
        <h3 class="do-panel__title">Manage licenses</h3>
        <p style="margin:2px 0 0;font-size:12px;color:var(--do-text-passive);">Adjust seat counts across your subscription. Changes apply at the next renewal unless you choose Add Now / Remove Now.</p>
      </div>
      <button class="do-row__iconbtn" aria-label="Close">${icons.close}</button>
    </header>
    <div class="do-panel__body" style="gap:12px;"></div>
    <footer class="do-panel__footer"></footer>`;
  const body = root.querySelector('.do-panel__body');
  products.forEach((p) => body.appendChild(createProductCard(p)));
  const footer = root.querySelector('footer');
  footer.append(
    createButton({ label: 'Discard', variant: 'ghost', leadingIcon: false }),
    createButton({ label: 'Review changes', variant: 'accent', leadingIcon: false }),
  );
  return root;
};
