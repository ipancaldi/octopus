import './primitives.css';

export const createRadio = ({
  label = '',
  name = 'radio-group',
  value = '',
  checked = false,
  disabled = false,
  filled = false,
  onChange,
} = {}) => {
  const root = document.createElement('label');
  root.className = 'do-radio' + (filled ? ' do-radio--filled' : '');
  root.dataset.checked = String(checked);
  if (disabled) root.dataset.disabled = 'true';
  root.innerHTML = `
    <input type="radio" name="${name}" value="${value}" ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''} style="position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;" />
    <span class="do-radio__dot" role="radio" aria-checked="${checked}"></span>
    ${label ? `<span>${label}</span>` : ''}`;
  const input = root.querySelector('input');
  input.addEventListener('change', (e) => {
    if (disabled) return;
    root.dataset.checked = String(e.target.checked);
    root.querySelector('.do-radio__dot').setAttribute('aria-checked', String(e.target.checked));
    onChange?.(e.target.checked);
  });
  return root;
};

export const createRadioGroup = ({
  name = 'radio-group',
  options = [],
  value,
  filled = false,
  layout = 'column', // 'column' | 'row'
  onChange,
} = {}) => {
  const root = document.createElement('div');
  root.style.cssText = `display:flex;flex-direction:${layout};gap:12px;`;
  root.setAttribute('role', 'radiogroup');
  options.forEach((opt) => {
    const r = createRadio({
      ...opt,
      name,
      checked: opt.value === value,
      filled,
      onChange: () => {
        root.querySelectorAll('.do-radio').forEach((el) => {
          const input = el.querySelector('input');
          el.dataset.checked = String(input.value === opt.value);
          el.querySelector('.do-radio__dot').setAttribute('aria-checked', String(input.value === opt.value));
        });
        onChange?.(opt.value);
      },
    });
    root.appendChild(r);
  });
  return root;
};
