import './domain.css';
import { icons } from '../primitives/icons.js';
import { createMember } from './Member.js';
import { createButton } from '../primitives/Button.js';

const DEFAULT_MEMBERS = [
  { name: 'Arun Aryal', email: 'arun.aryal@disguise.one' },
  { name: 'Roberto Cavazos', email: 'roberto@disguise.one' },
  { name: 'Emilie LeBlanc', email: 'emilie.leblanc@disguise.one' },
  { name: 'Yui Tanaka', email: 'yui.tanaka@disguise.one' },
  { name: 'Sasha Patel', email: 'sasha.patel@disguise.one' },
];

export const createAssignLicensePanel = ({
  members = DEFAULT_MEMBERS,
  selectedIndex = 1,
  modal = false,
  onCancel,
  onAssign,
} = {}) => {
  const root = document.createElement('section');
  root.className = 'do-panel';
  root.style.width = '420px';
  if (modal) root.style.boxShadow = '0 24px 48px -12px rgba(16,24,40,0.25)';
  root.innerHTML = `
    <header class="do-panel__header">
      <h3 class="do-panel__title">Assign license</h3>
      <button class="do-row__iconbtn" aria-label="Close">${icons.close}</button>
    </header>
    <div class="do-panel__body">
      <div class="do-search-input">${icons.search}<input placeholder="Search workspace members" /></div>
      <div class="do-member-list"></div>
    </div>
    <footer class="do-panel__footer"></footer>`;

  const list = root.querySelector('.do-member-list');
  members.forEach((m, i) => {
    const item = document.createElement('div');
    item.className = 'do-member-list__item';
    item.setAttribute('role', 'radio');
    item.setAttribute('aria-selected', String(i === selectedIndex));
    const radio = document.createElement('span');
    radio.className = 'do-member-list__radio';
    item.appendChild(radio);
    item.appendChild(createMember(m));
    item.addEventListener('click', () => {
      list.querySelectorAll('.do-member-list__item').forEach((el, j) => el.setAttribute('aria-selected', String(j === i)));
    });
    list.appendChild(item);
  });

  const footer = root.querySelector('footer');
  const cancel = createButton({ label: 'Cancel', variant: 'ghost', leadingIcon: false, onClick: onCancel });
  const assign = createButton({ label: 'Assign license', variant: 'accent', leadingIcon: false, onClick: onAssign });
  footer.append(cancel, assign);
  return root;
};
