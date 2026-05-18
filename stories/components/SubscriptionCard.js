import './domain.css';
import { createTagsStatus } from '../primitives/TagsStatus.js';

export const createSubscriptionCard = ({
  product = 'Designer Pro',
  productSlug = 'Designer Pro',
  status = 'active',
  totalLicenses = 12,
  assigned = 8,
  renewal = '12/03/2026',
} = {}) => {
  const root = document.createElement('article');
  root.className = 'do-sub-card';
  root.innerHTML = `
    <div class="do-sub-card__header">
      <div class="do-sub-card__product">
        <img src="${encodeURI(productSlug)}_32.svg" alt="${product}" />
        <span class="do-sub-card__product-name">${product}</span>
      </div>
    </div>
    <div class="do-sub-card__metrics">
      <div>
        <div class="do-sub-card__metric-label">Licenses</div>
        <div class="do-sub-card__metric-value">${assigned} / ${totalLicenses}</div>
      </div>
      <div>
        <div class="do-sub-card__metric-label">Renewal</div>
        <div class="do-sub-card__metric-value">${renewal}</div>
      </div>
      <div>
        <div class="do-sub-card__metric-label">Status</div>
        <div class="do-sub-card__metric-value" style="font-size:11px;font-weight:400;"></div>
      </div>
    </div>`;
  root.querySelectorAll('.do-sub-card__metric-value')[2].appendChild(createTagsStatus({ status }));
  return root;
};
