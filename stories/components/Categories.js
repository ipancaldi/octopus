import './domain.css';

const DEFAULT_CATEGORIES = [
  { label: 'All', count: 12, active: true },
  { label: 'Renderstream', count: 4 },
  { label: 'Designer Pro', count: 3 },
  { label: 'Designer Starter', count: 2 },
  { label: 'Mapping Matter', count: 2 },
  { label: 'X1', count: 1 },
];

export const createCategories = ({
  items = DEFAULT_CATEGORIES,
  onChange,
} = {}) => {
  const root = document.createElement('div');
  root.className = 'do-cats';
  items.forEach((it, idx) => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'do-cats__chip';
    chip.setAttribute('aria-pressed', String(!!it.active));
    chip.innerHTML = `${it.label}${it.count != null ? `<span class="do-cats__chip-count">${it.count}</span>` : ''}`;
    chip.addEventListener('click', () => {
      root.querySelectorAll('[aria-pressed]').forEach((c, i) => c.setAttribute('aria-pressed', String(i === idx)));
      onChange?.(idx, it);
    });
    root.appendChild(chip);
  });
  return root;
};
