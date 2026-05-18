import './domain.css';

export const createCompactProductCard = ({
  product = 'Mapping Matter 2.0',
  productSlug = 'Mapping_Matter',
  description = 'Cloud-based projection mapping',
  price = '$799',
  ctaLabel = 'View Details',
  onCta,
} = {}) => {
  const root = document.createElement('article');
  root.className = 'do-compact-card';
  root.innerHTML = `
    <span class="do-compact-card__icon"><img src="${encodeURI(productSlug)}_68.svg" alt="" /></span>
    <div class="do-compact-card__body">
      <p class="do-compact-card__name">${product}</p>
      <p class="do-compact-card__desc">${description}</p>
    </div>
    <div class="do-compact-card__aside">
      <span class="do-compact-card__price">${price}</span>
      <button class="do-compact-card__cta" type="button">${ctaLabel}</button>
    </div>`;
  if (onCta) root.querySelector('.do-compact-card__cta').addEventListener('click', onCta);
  return root;
};
