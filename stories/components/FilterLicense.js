import './domain.css';
import { createSelect } from '../primitives/Select.js';
import { icons } from '../primitives/icons.js';

const DEFAULT_FILTERS = [
  { label: 'Product', leadingIcon: 'pkg' },
  { label: 'Status', leadingIcon: 'autorenew' },
  { label: 'Renewal Date', leadingIcon: 'calendar' },
  { label: 'Member', leadingIcon: 'person' },
];

export const createFilterLicense = ({
  filters = DEFAULT_FILTERS,
  mobile = false,
} = {}) => {
  const root = document.createElement('div');
  root.className = 'do-filterbar' + (mobile ? ' do-filterbar--mobile' : '');
  const icon = document.createElement('span');
  icon.className = 'do-filterbar__icon';
  icon.innerHTML = icons.eventRepeat;
  root.appendChild(icon);
  filters.forEach((f) => root.appendChild(createSelect(f)));
  return root;
};
