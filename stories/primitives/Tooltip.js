import './primitives.css';

export const createTooltip = ({
  target,
  text = 'Tooltip',
  placement = 'top', // 'top' | 'bottom' | 'left' | 'right'
  open = false,
  withArrow = true,
} = {}) => {
  const wrap = document.createElement('span');
  wrap.className = 'do-tooltip-target';

  if (target instanceof Node) wrap.appendChild(target);
  else wrap.innerHTML = target ?? '';

  const tip = document.createElement('span');
  tip.className = 'do-tooltip';
  tip.dataset.placement = placement;
  tip.dataset.open = String(open);
  tip.setAttribute('role', 'tooltip');
  tip.innerHTML = `${text}${withArrow ? '<span class="do-tooltip__arrow"></span>' : ''}`;
  wrap.appendChild(tip);

  const show = () => (tip.dataset.open = 'true');
  const hide = () => (tip.dataset.open = 'false');
  wrap.addEventListener('mouseenter', show);
  wrap.addEventListener('mouseleave', hide);
  wrap.addEventListener('focusin', show);
  wrap.addEventListener('focusout', hide);

  return wrap;
};
