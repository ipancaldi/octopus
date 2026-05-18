import './primitives.css';

export const createNewToggle = ({ on = true, onChange } = {}) => {
  const root = document.createElement('button');
  root.type = 'button';
  root.className = 'do-newtoggle';
  root.dataset.on = String(on);
  root.setAttribute('role', 'switch');
  root.setAttribute('aria-checked', String(on));
  root.innerHTML = '<span class="do-newtoggle__thumb"></span>';
  root.addEventListener('click', () => {
    const next = root.dataset.on !== 'true';
    root.dataset.on = String(next);
    root.setAttribute('aria-checked', String(next));
    onChange?.(next);
  });
  return root;
};
