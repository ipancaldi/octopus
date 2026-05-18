import './Button.css';

const iconAdd = `
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M10 4.17v11.66M4.17 10h11.66" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
  </svg>`;

export const createButton = ({
  label = 'Add subscription',
  variant = 'secondary',
  size = 'md',
  leadingIcon = false,
  disabled = false,
  onClick,
} = {}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = `do-btn do-btn--${variant} do-btn--${size}`;
  if (disabled) btn.disabled = true;
  if (onClick) btn.addEventListener('click', onClick);
  btn.innerHTML = `
    ${leadingIcon ? `<span class="do-btn__icon">${iconAdd}</span>` : ''}
    <span>${label}</span>
  `;
  return btn;
};
