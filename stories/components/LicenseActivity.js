import './domain.css';
import { icons } from '../primitives/icons.js';

const DEFAULT_EVENTS = [
  { type: 'assigned', title: 'License assigned to Roberto Cavazos', subtitle: 'Studio London · Designer Pro', when: '2 hours ago' },
  { type: 'renewed', title: 'License auto-renewed', subtitle: 'Annual plan extended to 31/12/2027', when: 'Yesterday' },
  { type: 'created', title: 'License key generated', subtitle: 'LLC-f7ea8112-as65ds93-dhf45gs9', when: 'Jan 1, 2025' },
  { type: 'cancelled', title: 'Pending change cancelled', subtitle: 'License removal was scrubbed by Emilie LeBlanc', when: 'Dec 14, 2024' },
];

const ICON_BY_TYPE = {
  assigned: 'person',
  renewed: 'autorenew',
  created: 'key',
  cancelled: 'close',
  edit: 'edit',
};

export const createLicenseActivity = ({
  events = DEFAULT_EVENTS,
  title = 'Activity',
} = {}) => {
  const root = document.createElement('section');
  root.className = 'do-panel';
  root.style.width = '420px';
  root.innerHTML = `
    <header class="do-panel__header">
      <h3 class="do-panel__title">${title}</h3>
      <button class="do-row__iconbtn" aria-label="Close">${icons.close}</button>
    </header>
    <div class="do-activity"></div>`;
  const list = root.querySelector('.do-activity');
  events.forEach((e) => {
    const item = document.createElement('div');
    item.className = 'do-activity__item';
    item.innerHTML = `
      <span class="do-activity__avatar">${icons[ICON_BY_TYPE[e.type] ?? 'visibility']}</span>
      <div>
        <p class="do-activity__title">${e.title}</p>
        <p class="do-activity__subtitle">${e.subtitle}</p>
      </div>
      <span class="do-activity__when">${e.when}</span>`;
    list.appendChild(item);
  });
  return root;
};
