import './domain.css';
import { icons } from '../primitives/icons.js';

export const createProductTierCard = ({
  product = 'D3 Starter',
  productSlug = 'Designer Starter',
  description = "It's your version of Designer for learning, training, school projects and getting started with Disguise.",
  price = 'Free',
  priceMode = 'value', // 'value' | 'quote'
  features = [
    'Online registration',
    '1.0 model · 1 user license',
    'No extension functions',
    'Software upgrades',
    'Community support',
  ],
  ctaLabel = 'Get Started',
  detailsLabel = 'Product Details',
  badgeIcon = 'shop',
  media,
  onCta,
  onDetails,
} = {}) => {
  const card = document.createElement('article');
  card.className = 'do-tier-card';
  card.innerHTML = `
    <div class="do-tier-card__media" style="${media ? `background-image:url('${media}')` : ''}">
      ${badgeIcon ? `<span class="do-tier-card__media-badge">${icons[badgeIcon] ?? ''}</span>` : ''}
    </div>
    <div class="do-tier-card__body">
      <div class="do-tier-card__header">
        <span class="do-tier-card__icon"><img src="${encodeURI(productSlug)}_32.svg" alt="" /></span>
        <h3 class="do-tier-card__name">${product}</h3>
      </div>
      <p class="do-tier-card__desc">${description}</p>
      <p class="do-tier-card__price ${priceMode === 'quote' ? 'do-tier-card__price--quote' : ''}">${price}</p>
      <ul class="do-tier-card__features">${features.map((f) => `<li>${f}</li>`).join('')}</ul>
      <button class="do-tier-card__cta" type="button">${ctaLabel}</button>
      <button class="do-tier-card__details" type="button">${detailsLabel}</button>
    </div>`;
  if (onCta) card.querySelector('.do-tier-card__cta').addEventListener('click', onCta);
  if (onDetails) card.querySelector('.do-tier-card__details').addEventListener('click', onDetails);
  return card;
};

export const createTierToggle = ({
  options = [{ label: 'Quote', value: 'quote' }, { label: 'Buy Now', value: 'buy' }],
  value = 'quote',
  onChange,
} = {}) => {
  const root = document.createElement('div');
  root.className = 'do-tier-toggle';
  options.forEach((opt) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'do-tier-toggle__btn';
    btn.setAttribute('aria-pressed', String(opt.value === value));
    btn.textContent = opt.label;
    btn.addEventListener('click', () => {
      root.querySelectorAll('.do-tier-toggle__btn').forEach((b, i) => b.setAttribute('aria-pressed', String(options[i].value === opt.value)));
      onChange?.(opt.value);
    });
    root.appendChild(btn);
  });
  return root;
};
