import './primitives.css';
import { icons } from './icons.js';

export const createSelect = ({
  label = 'Unassigned',
  leadingIcon = 'person',
  trailingIcon = 'chevronDown',
  width,
  onClick,
} = {}) => {
  const root = document.createElement('button');
  root.type = 'button';
  root.className = 'do-select';
  if (width) root.style.width = typeof width === 'number' ? `${width}px` : width;
  root.innerHTML = `
    ${leadingIcon ? `<span class="do-select__icon">${icons[leadingIcon] ?? ''}</span>` : ''}
    <span class="do-select__label">${label}</span>
    ${trailingIcon ? `<span class="do-select__icon">${icons[trailingIcon] ?? ''}</span>` : ''}
  `;
  if (onClick) root.addEventListener('click', onClick);
  return root;
};
