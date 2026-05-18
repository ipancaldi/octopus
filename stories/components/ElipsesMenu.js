import './domain.css';
import { icons } from '../primitives/icons.js';

const DEFAULT_ITEMS = [
  { label: 'Edit Subscription', icon: 'edit', active: true },
  { label: 'Rename', icon: 'edit' },
  { label: 'Cancel Subscription', icon: 'close', danger: true },
];

export const createElipsesMenuItem = ({
  label = 'Resend Invite',
  icon = 'sync',
  active = false,
  danger = false,
  onClick,
} = {}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'do-emenu__item';
  if (active) btn.dataset.active = 'true';
  if (danger) btn.dataset.danger = 'true';
  btn.innerHTML = `
    <span class="do-emenu__item-icon">${icons[icon] ?? ''}</span>
    <span>${label}</span>`;
  if (onClick) btn.addEventListener('click', onClick);
  return btn;
};

export const createElipsesMenu = ({ items = DEFAULT_ITEMS } = {}) => {
  const root = document.createElement('div');
  root.className = 'do-emenu';
  root.setAttribute('role', 'menu');
  items.forEach((it) => root.appendChild(createElipsesMenuItem(it)));
  return root;
};
