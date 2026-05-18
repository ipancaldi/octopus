import './domain.css';
import { icons } from '../primitives/icons.js';

export const createHelpBanner = ({
  title = "Not sure what's best for you?",
  description = "We'll recommend the perfect product for your needs.",
  ctaLabel = 'Help Me Choose',
  icon = 'help',
  onCta,
} = {}) => {
  const root = document.createElement('aside');
  root.className = 'do-help-banner';
  root.innerHTML = `
    <span class="do-help-banner__icon">${icons[icon] ?? ''}</span>
    <div class="do-help-banner__body">
      <p class="do-help-banner__title">${title}</p>
      <p class="do-help-banner__desc">${description}</p>
    </div>
    <button class="do-help-banner__cta" type="button">${ctaLabel}</button>`;
  if (onCta) root.querySelector('.do-help-banner__cta').addEventListener('click', onCta);
  return root;
};
