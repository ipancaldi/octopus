import './primitives.css';

export const createTextInput = ({
  value = '1',
  placeholder = '',
  type = 'text',
  numeric = true,
  width,
  fullWidth = false,
  disabled = false,
  onInput,
} = {}) => {
  const input = document.createElement('input');
  input.type = numeric ? 'number' : type;
  input.value = value;
  input.placeholder = placeholder;
  input.disabled = disabled;
  input.className = 'do-input' + (fullWidth ? ' do-input--full' : '');
  if (width) input.style.width = typeof width === 'number' ? `${width}px` : width;
  if (onInput) input.addEventListener('input', (e) => onInput(e.target.value));
  return input;
};
