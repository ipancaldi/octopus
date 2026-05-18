import './domain.css';
import { icons } from '../primitives/icons.js';
import { createTagsStatus } from '../primitives/TagsStatus.js';
import { createToggle } from '../primitives/Toggle.js';
import { createSubscriptionRow, createProductRow, createLicenseRow } from './Rows.js';
import { createButton } from '../primitives/Button.js';

export const createSubscriptionPanel = ({
  name = 'Studio London',
  status = 'active',
  renewal = '31/12/2026',
  autoRenew = true,
  total = '$24,000 / year',
  hierarchy = [
    { kind: 'product', product: 'Mapping Matter', productSlug: 'Mapping_Matter', licenses: 2, status: 'active' },
    { kind: 'license', licenseKey: 'LLC-f7ea8112-as65ds93-dhf45gs9', status: 'active', daysRemaining: 180, assignee: 'Roberto Cavazos', state: 'edited', label: 'Studio A · Master' },
    { kind: 'license', licenseKey: 'LLC-b22c1190-9a83fdaa-c01b8ee2', status: 'active', daysRemaining: 180 },
    { kind: 'product', product: 'Renderstream', productSlug: 'Renderstream', licenses: 4, status: 'active' },
  ],
} = {}) => {
  const root = document.createElement('section');
  root.className = 'do-panel do-subscription-panel';
  root.innerHTML = `
    <header class="do-panel__header">
      <div>
        <h3 class="do-panel__title">${name}</h3>
        <div class="do-subscription-panel__meta">
          <span data-status></span>
          <span>Renews <strong>${renewal}</strong></span>
          <span>${total}</span>
        </div>
      </div>
      <div class="do-subscription-panel__controls">
        <span class="do-subscription-panel__renew">
          ${icons.sync}
          <span class="do-subscription-panel__renew-label">Auto-renew</span>
          <span data-toggle></span>
        </span>
        <button class="do-row__iconbtn" aria-label="Close">${icons.close}</button>
      </div>
    </header>
    <div class="do-panel__body"></div>
    <footer class="do-panel__footer"></footer>`;
  root.querySelector('[data-status]').appendChild(createTagsStatus({ status }));
  root.querySelector('[data-toggle]').appendChild(createToggle({ on: autoRenew }));
  const body = root.querySelector('.do-panel__body');
  body.appendChild(createSubscriptionRow({ name, products: hierarchy.filter((h) => h.kind === 'product').length, licenses: hierarchy.filter((h) => h.kind === 'license').length, status, renewal, total, active: true, expanded: true }));
  hierarchy.forEach((h) => {
    body.appendChild(h.kind === 'product' ? createProductRow(h) : createLicenseRow(h));
  });
  const footer = root.querySelector('footer');
  footer.append(
    createButton({ label: 'Cancel subscription', variant: 'ghost', leadingIcon: false }),
    createButton({ label: 'Manage licenses', variant: 'accent', leadingIcon: false }),
  );
  return root;
};
