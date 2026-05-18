import './primitives.css';
import { icons } from './icons.js';

export const createTabs = ({
  items = [
    { label: 'My Subscriptions', icon: 'pkg' },
    { label: 'Request Quote', icon: 'quote' },
    { label: 'Invoices', icon: 'receipt' },
  ],
  selectedIndex = 0,
  onChange,
} = {}) => {
  const root = document.createElement('div');
  root.className = 'do-tabs';
  root.setAttribute('role', 'tablist');
  items.forEach((item, idx) => {
    const tab = document.createElement('button');
    tab.type = 'button';
    tab.className = 'do-tab';
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', String(idx === selectedIndex));
    tab.innerHTML = `
      ${item.icon ? `<span class="do-tab__icon">${icons[item.icon] ?? ''}</span>` : ''}
      <span>${item.label}</span>
    `;
    tab.addEventListener('click', () => {
      root.querySelectorAll('[role="tab"]').forEach((t, i) => t.setAttribute('aria-selected', String(i === idx)));
      onChange?.(idx, item);
    });
    root.appendChild(tab);
  });
  return root;
};
