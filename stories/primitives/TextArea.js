import './primitives.css';

export const createTextArea = ({
  value = '',
  placeholder = 'Add a note',
  rows = 4,
  disabled = false,
  onInput,
} = {}) => {
  const ta = document.createElement('textarea');
  ta.className = 'do-textarea';
  ta.rows = rows;
  ta.value = value;
  ta.placeholder = placeholder;
  ta.disabled = disabled;
  if (onInput) ta.addEventListener('input', (e) => onInput(e.target.value));
  return ta;
};
