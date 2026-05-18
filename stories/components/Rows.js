import './domain.css';
import { icons } from '../primitives/icons.js';
import { createCheckbox } from '../primitives/Checkbox.js';
import { createSelect } from '../primitives/Select.js';
import { createTagsStatus } from '../primitives/TagsStatus.js';

const statusDot = (status) => `<span class="do-row__status-dot" data-status="${status}"></span>`;
const dateCell = (date) => `<span class="do-row__date">${icons.calendar}<span>${date}</span></span>`;

export const createSubscriptionRow = ({
  name = 'Editable Subs Name',
  products = 3,
  licenses = 16,
  status = 'active',
  renewal = '31/12/2026',
  total = '$ Total',
  active = false,
  mobile = false,
  expanded = false,
  onToggle,
} = {}) => {
  const root = document.createElement('div');
  root.className = 'do-row do-row--subscription' + (mobile ? ' do-row--mobile' : '');
  if (active) root.dataset.active = 'true';
  if (mobile) {
    root.innerHTML = `
      <div class="do-row__name-cell">
        ${statusDot(status)}
        <div>
          <div class="do-row__title">${name}</div>
          <div class="do-row__meta"><strong>${products}</strong> Products · <strong>${licenses}</strong> Licenses</div>
        </div>
      </div>
      <button class="do-row__iconbtn" aria-label="More">${icons.more}</button>`;
    return root;
  }
  root.innerHTML = `
    <div class="do-row__name-cell">
      <button class="do-row__chevron" aria-label="Expand" style="border:0;background:transparent;cursor:pointer;transform:rotate(${expanded ? 0 : -90}deg);transition:transform 120ms ease;">${icons.chevronDown}</button>
      <div>
        <div class="do-row__title">${name}</div>
        <div class="do-row__meta"><strong>${products}</strong> Products <strong>${licenses}</strong> Licenses</div>
      </div>
    </div>
    <span></span>
    <span>${renewal}</span>
    <span style="text-align:right;color:var(--do-text-passive);">${total}</span>
    <button class="do-row__iconbtn" aria-label="More">${icons.more}</button>`;
  root.children[1].appendChild(createTagsStatus({ status }));
  const chev = root.querySelector('.do-row__chevron');
  chev?.addEventListener('click', () => {
    const open = chev.style.transform.includes('-90') ? true : false;
    chev.style.transform = open ? 'rotate(0deg)' : 'rotate(-90deg)';
    onToggle?.(open);
  });
  return root;
};

export const createProductRow = ({
  product = 'Mapping Matter',
  productSlug = 'Mapping_Matter',
  licenses = 2,
  status = 'active',
  selected = false,
  mobile = false,
  onToggleSelected,
} = {}) => {
  const root = document.createElement('div');
  root.className = 'do-row do-row--product' + (mobile ? ' do-row--mobile' : '');
  if (mobile) {
    root.innerHTML = `
      <div class="do-row__name-cell">
        ${statusDot(status)}
        <span class="do-row__title">${product}</span>
      </div>
      <span class="do-row__meta"><strong>${licenses}</strong> licenses</span>`;
    return root;
  }
  const nameCell = document.createElement('div');
  nameCell.className = 'do-row__name-cell';
  const cb = createCheckbox({ checked: selected, onChange: onToggleSelected });
  nameCell.appendChild(cb);
  const chev = document.createElement('span');
  chev.style.cssText = 'width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;color:var(--do-text);';
  chev.innerHTML = icons.chevronDown;
  nameCell.appendChild(chev);
  const thumb = document.createElement('div');
  thumb.className = 'do-row__thumb';
  thumb.innerHTML = `<img src="${encodeURI(productSlug)}_32.svg" alt="${product}" />`;
  nameCell.appendChild(thumb);
  const text = document.createElement('div');
  text.innerHTML = `
    <div class="do-row__title">${product}</div>
    <div class="do-row__meta"><strong>${licenses}</strong> licenses</div>`;
  nameCell.appendChild(text);

  root.appendChild(nameCell);
  root.insertAdjacentHTML('beforeend', statusDot(status));
  root.insertAdjacentHTML('beforeend', `<span style="text-align:right;color:var(--do-text-passive);">${licenses}/${licenses}</span>`);
  root.insertAdjacentHTML('beforeend', `<button class="do-row__iconbtn" aria-label="Renew">${icons.refresh}</button>`);
  return root;
};

export const createLicenseRow = ({
  state = 'first', // 'first' | 'editing' | 'edited' | 'disabled'
  licenseKey = 'LLC-f7ea8112-as65ds93-dhf45gs9',
  label = '',
  status = 'active',
  daysRemaining = 180,
  assignee,
  mobile = false,
  selected = false,
  onCopy,
  onToggleVisibility,
  onSync,
  onDelete,
  onEditLabel,
  onConfirmLabel,
} = {}) => {
  const root = document.createElement('div');
  root.className = 'do-row do-row--license' + (mobile ? ' do-row--mobile' : '');
  root.dataset.state = state;

  if (mobile) {
    root.innerHTML = `
      <div class="do-row__name-cell">
        ${statusDot(status)}
        <span class="do-row__key">${icons.key}<span>${licenseKey}</span></span>
      </div>
      <span class="do-row__meta">${daysRemaining} days</span>`;
    return root;
  }

  // Leading checkbox — only on first-time + disabled states
  if (state === 'first' || state === 'disabled') {
    root.appendChild(createCheckbox({ checked: selected }));
  }

  // Label input
  const labelEl = document.createElement('div');
  labelEl.className = 'do-row__label';
  if (state === 'editing') labelEl.dataset.state = 'editing';
  else if (state === 'edited') labelEl.dataset.state = 'edited';
  const placeholderText = state === 'editing' ? 'Editing the lab' : (state === 'edited' ? 'Label Edited and if too long it ...' : 'Label');
  labelEl.innerHTML = `
    <input value="${label || ''}" placeholder="${placeholderText}" ${state === 'disabled' ? 'disabled' : ''} />
    <button class="do-row__label__action" type="button" aria-label="${state === 'editing' ? 'Confirm' : 'Edit'}">${state === 'editing' ? icons.chevronDown.replace('viewBox="0 0 16 16"', 'viewBox="0 0 16 16"').replace('d="M4 6l4 4 4-4"', 'd="M4 8l3 3 5-6"') : icons.edit}</button>`;
  const labelBtn = labelEl.querySelector('.do-row__label__action');
  if (state === 'editing' && onConfirmLabel) labelBtn.addEventListener('click', () => onConfirmLabel(labelEl.querySelector('input').value));
  else if (onEditLabel) labelBtn.addEventListener('click', () => onEditLabel(labelEl));
  root.appendChild(labelEl);

  // Key cluster
  const keyEl = document.createElement('div');
  keyEl.className = 'do-row__key';
  keyEl.innerHTML = `
    ${icons.key}
    <span>${licenseKey}</span>
    <button class="do-row__key__btn" type="button" aria-label="Copy">${icons.copy}</button>
    <button class="do-row__key__btn" type="button" aria-label="Hide">${icons.visibility}</button>`;
  if (onCopy) keyEl.querySelectorAll('.do-row__key__btn')[0].addEventListener('click', onCopy);
  if (onToggleVisibility) keyEl.querySelectorAll('.do-row__key__btn')[1].addEventListener('click', onToggleVisibility);
  root.appendChild(keyEl);

  // Status dot
  root.insertAdjacentHTML('beforeend', statusDot(status));

  // Days remaining
  const days = document.createElement('span');
  days.className = 'do-row__days';
  days.textContent = `${daysRemaining} days`;
  root.appendChild(days);

  // Sync action
  const sync = document.createElement('button');
  sync.type = 'button';
  sync.className = 'do-row__sync';
  sync.setAttribute('aria-label', 'Renew');
  sync.innerHTML = icons.refresh;
  if (onSync) sync.addEventListener('click', onSync);
  root.appendChild(sync);

  // Assignee select
  root.appendChild(createSelect({ label: assignee ?? 'Unassigned', leadingIcon: 'person' }));

  // Trailing action — delete (first) or do-not-disturb (disabled). Editing/edited states have no trailing icon.
  if (state === 'first') {
    const del = document.createElement('button');
    del.type = 'button';
    del.className = 'do-row__trailing';
    del.setAttribute('aria-label', 'Delete');
    del.innerHTML = icons.delete;
    if (onDelete) del.addEventListener('click', onDelete);
    root.appendChild(del);
  } else if (state === 'disabled') {
    const off = document.createElement('span');
    off.className = 'do-row__trailing do-row__trailing--danger';
    off.setAttribute('aria-label', 'Disabled');
    off.innerHTML = icons.syncDisabled;
    root.appendChild(off);
  }

  return root;
};
