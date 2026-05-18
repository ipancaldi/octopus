import './primitives.css';
import { icons } from './icons.js';

export const createSliderArrow = ({
  direction = 'right', // 'left' | 'right'
  size = 'md',         // 'md' | 'sm'
  disabled = false,
  onClick,
} = {}) => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'do-slider-arrow' + (size === 'sm' ? ' do-slider-arrow--sm' : '');
  if (disabled) btn.disabled = true;
  btn.setAttribute('aria-label', direction === 'left' ? 'Previous' : 'Next');
  const svg = icons.chevronRight;
  btn.innerHTML = direction === 'left'
    ? svg.replace('viewBox="0 0 16 16"', 'viewBox="0 0 16 16" style="transform:scaleX(-1);"')
    : svg;
  if (onClick) btn.addEventListener('click', onClick);
  return btn;
};
