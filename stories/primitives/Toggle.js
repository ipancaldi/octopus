import './primitives.css';

export const createToggle = ({ on = true, disabled = false, onChange } = {}) => {
  const root = document.createElement('button');
  root.type = 'button';
  root.className = 'do-toggle';
  root.dataset.on = String(on);
  if (disabled) {
    root.dataset.disabled = 'true';
    root.disabled = true;
  }
  root.setAttribute('role', 'switch');
  root.setAttribute('aria-checked', String(on));
  root.innerHTML = '<span class="do-toggle__knob"></span>';
  root.addEventListener('click', () => {
    if (disabled) return;
    const next = root.dataset.on !== 'true';
    root.dataset.on = String(next);
    root.setAttribute('aria-checked', String(next));
    onChange?.(next);
  });
  return root;
};
