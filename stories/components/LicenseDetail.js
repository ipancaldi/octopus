import './domain.css';
import { icons } from '../primitives/icons.js';
import { createTagsStatus } from '../primitives/TagsStatus.js';
import { createToggle } from '../primitives/Toggle.js';
import { createSelect } from '../primitives/Select.js';

const keyRow = (key) => `
  <div class="do-licdetail__key">
    <span style="width:16px;height:16px;color:var(--do-text-passive);">${icons.key}</span>
    <code>${key}</code>
    <button aria-label="Copy">${icons.copy}</button>
    <button aria-label="Hide">${icons.visibility}</button>
  </div>`;

const versionRow = ({ label, range, tag, tagClass }) => `
  <div class="do-licdetail__version">
    <div>
      <div class="do-licdetail__version-text">${label}</div>
      <div class="do-licdetail__version-text"><strong>${range}</strong></div>
    </div>
    <span class="do-licdetail__tag ${tagClass}">${tag}</span>
  </div>`;

const metaRow = (icon, label, value, bold = false) => `
  <div class="do-licdetail__meta-row">
    <span class="label">${icons[icon]}<span>${label}</span></span>
    <span class="value${bold ? ' bold' : ''}">${value}</span>
  </div>`;

export const createLicenseDetail = ({
  proKey = 'LLC-f7ea8112-as65ds93-dhf45gs9',
  legacyKey = 'LLC-f7ea8112-as65ds93-dhf45gs9',
  status = 'active',
  planType = 'Annual',
  startDate = '01/01/2025',
  renewalDate = '31/12/2026',
  autoRenew = true,
  assignee,
} = {}) => {
  const root = document.createElement('aside');
  root.className = 'do-licdetail';
  root.innerHTML = `
    <div style="display:flex;flex-direction:column;gap:20px;padding-bottom:8px;">
      ${versionRow({ label: 'Pro Version', range: 'r31+', tag: 'Pro', tagClass: 'do-licdetail__tag--pro' })}
      ${keyRow(proKey)}
      <hr/>
      ${versionRow({ label: 'Legacy Version', range: 'r18 - r30.8', tag: 'Legacy', tagClass: 'do-licdetail__tag--legacy' })}
      ${keyRow(legacyKey)}
      <hr/>
      <div class="do-licdetail__meta-row" data-meta="status">
        <span class="label">Status</span>
        <span class="value" data-status-slot></span>
      </div>
      ${metaRow('card', 'Plan Type', planType)}
      ${metaRow('calendar', 'Start Date', startDate)}
      ${metaRow('eventRepeat', 'Renewal Date', renewalDate, true)}
      <div class="do-licdetail__meta-row" data-meta="auto-renew">
        <span class="label">${icons.autorenew}<span>Auto-Renew</span></span>
        <span class="value" data-renew-slot></span>
      </div>
      <div class="do-licdetail__meta-row" data-meta="assignee">
        <span class="label">${icons.person}<span>Assigned to</span></span>
        <span class="value" data-assignee-slot></span>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <button class="do-licdetail__primary-btn">${icons.key}<span>Deploy License</span></button>
      <button class="do-licdetail__secondary-btn">${icons.edit}<span>Modify Subscription</span></button>
    </div>`;
  root.querySelector('[data-status-slot]').appendChild(createTagsStatus({ status }));
  root.querySelector('[data-renew-slot]').appendChild(createToggle({ on: autoRenew }));
  root.querySelector('[data-assignee-slot]').appendChild(createSelect({ label: assignee ?? 'Unassigned', leadingIcon: 'person' }));
  return root;
};
