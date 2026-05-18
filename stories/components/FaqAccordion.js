import './domain.css';
import { icons } from '../primitives/icons.js';

const DEFAULT_ITEMS = [
  {
    q: "What's the difference between a subscription and a license?",
    a: `A licence is a permission to use a product within the terms of your subscription.\n\nDepending on the product, licences may be:\n· Assigned to a user (likely cloud-based)\n· Attached to a device (key-secured)\n· Shared across a team (floating)`,
  },
  { q: 'How do I start using a product after purchase?', a: 'After purchase you receive a license activation email. Open Disguise Designer with the bundled key and the license activates automatically.' },
  { q: 'What happens if my payment fails or my subscription expires?', a: 'You enter a 14-day grace period. You can still use existing licenses; new activations are blocked until billing is restored.' },
  { q: 'Can I buy a subscription just for one month?', a: 'Yes — pick the monthly billing cycle on checkout. You can switch to annual at any time and we credit the unused portion.' },
  { q: 'Can I upgrade, change, or expand my subscription later?', a: 'Yes — Manage Subscription lets you add seats, switch product tiers, and pro-rate the billing automatically.' },
];

export const createFaqAccordion = ({
  items = DEFAULT_ITEMS,
  openIndex = 0,
} = {}) => {
  const root = document.createElement('section');
  root.className = 'do-faq';
  items.forEach((it, i) => {
    const item = document.createElement('div');
    item.className = 'do-faq__item';
    item.dataset.open = String(i === openIndex);
    item.innerHTML = `
      <button class="do-faq__trigger" type="button" aria-expanded="${i === openIndex}">
        <span>${it.q}</span>
        ${icons.chevronDown}
      </button>
      <div class="do-faq__panel">
        <div class="do-faq__content">${it.a}</div>
      </div>`;
    item.querySelector('.do-faq__trigger').addEventListener('click', () => {
      const open = item.dataset.open !== 'true';
      item.dataset.open = String(open);
      item.querySelector('.do-faq__trigger').setAttribute('aria-expanded', String(open));
    });
    root.appendChild(item);
  });
  return root;
};
