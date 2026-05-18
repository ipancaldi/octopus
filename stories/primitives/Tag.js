import './primitives.css';

export const createTag = ({ label = 'Active', color = 'aquamarine' } = {}) => {
  const span = document.createElement('span');
  span.className = `do-tag${color === 'aquamarine' ? '' : ' do-tag--' + color}`;
  span.textContent = label;
  return span;
};
