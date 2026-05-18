import './primitives.css';

export const createCheckbox = ({
  label = '',
  checked = false,
  disabled = false,
  onChange,
} = {}) => {
  const root = document.createElement('label');
  root.className = 'do-cb';
  root.dataset.checked = String(checked);
  if (disabled) root.dataset.disabled = 'true';
  root.innerHTML = `
    <span class="do-cb__box" role="checkbox" aria-checked="${checked}" tabindex="0"></span>
    ${label ? `<span>${label}</span>` : ''}
  `;
  const box = root.querySelector('.do-cb__box');
  const toggle = () => {
    if (disabled) return;
    const next = root.dataset.checked !== 'true';
    root.dataset.checked = String(next);
    box.setAttribute('aria-checked', String(next));
    onChange?.(next);
  };
  root.addEventListener('click', toggle);
  return root;
};
