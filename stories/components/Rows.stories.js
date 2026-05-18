import { createSubscriptionRow, createProductRow, createLicenseRow } from './Rows.js';
import { fn } from 'storybook/test';

export default {
  title: 'Components/Rows',
  parameters: { layout: 'padded' },
};

export const SubscriptionRow = {
  argTypes: {
    name: { control: 'text' },
    products: { control: 'number' },
    licenses: { control: 'number' },
    status: { control: 'select', options: ['active', 'pending', 'trial', 'expired', 'inactive'] },
    renewal: { control: 'text' },
    total: { control: 'text' },
    active: { control: 'boolean' },
    mobile: { control: 'boolean' },
    expanded: { control: 'boolean' },
    onToggle: { action: 'toggle' },
  },
  args: {
    name: 'Editable Subs Name',
    products: 3,
    licenses: 16,
    status: 'active',
    renewal: '31/12/2026',
    total: '$ 24,000',
    active: false,
    mobile: false,
    expanded: false,
    onToggle: fn(),
  },
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'width:760px;';
    wrap.appendChild(createSubscriptionRow(args));
    return wrap;
  },
};

export const SubscriptionRowActive = {
  ...SubscriptionRow,
  args: { ...SubscriptionRow.args, active: true, expanded: true },
};

export const SubscriptionRowMobile = {
  ...SubscriptionRow,
  args: { ...SubscriptionRow.args, mobile: true },
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'width:360px;';
    wrap.appendChild(createSubscriptionRow(args));
    return wrap;
  },
};

export const ProductRow = {
  argTypes: {
    product: { control: 'text' },
    productSlug: { control: 'select', options: ['Designer Pro', 'Designer Starter', 'Renderstream', 'Mapping_Matter', 'X1'] },
    licenses: { control: 'number' },
    status: { control: 'select', options: ['active', 'pending', 'trial', 'expired', 'inactive'] },
    selected: { control: 'boolean' },
    mobile: { control: 'boolean' },
  },
  args: { product: 'Mapping Matter', productSlug: 'Mapping_Matter', licenses: 2, status: 'active', selected: false, mobile: false, onToggleSelected: fn() },
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'width:760px;';
    wrap.appendChild(createProductRow(args));
    return wrap;
  },
};

export const ProductRowMobile = { ...ProductRow, args: { ...ProductRow.args, mobile: true } };

export const LicenseRow = {
  argTypes: {
    state: { control: 'select', options: ['first', 'editing', 'edited', 'disabled'] },
    licenseKey: { control: 'text' },
    label: { control: 'text' },
    status: { control: 'select', options: ['active', 'pending', 'trial', 'expired', 'inactive'] },
    daysRemaining: { control: 'number' },
    assignee: { control: 'text' },
    mobile: { control: 'boolean' },
    selected: { control: 'boolean' },
  },
  args: {
    state: 'first',
    licenseKey: 'LLC-f7ea8112-as65ds93-dhf45gs9',
    label: '',
    status: 'active',
    daysRemaining: 180,
    assignee: '',
    mobile: false,
    selected: false,
    onCopy: fn(),
    onToggleVisibility: fn(),
    onSync: fn(),
    onDelete: fn(),
    onEditLabel: fn(),
    onConfirmLabel: fn(),
  },
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'width:780px;';
    wrap.appendChild(createLicenseRow(args));
    return wrap;
  },
};

export const LicenseRowEditing = {
  ...LicenseRow,
  args: { ...LicenseRow.args, state: 'editing', label: 'Editing the lab' },
};

export const LicenseRowEdited = {
  ...LicenseRow,
  args: { ...LicenseRow.args, state: 'edited', label: 'Label Edited and if too long it ...' },
};

export const LicenseRowDisabled = {
  ...LicenseRow,
  args: { ...LicenseRow.args, state: 'disabled' },
};

export const LicenseRowAssigned = {
  ...LicenseRow,
  args: { ...LicenseRow.args, assignee: 'Roberto Cavazos' },
};

export const LicenseRowMobile = { ...LicenseRow, args: { ...LicenseRow.args, mobile: true } };

export const LicenseRowAllStates = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;flex-direction:column;gap:8px;width:780px;';
    wrap.appendChild(createLicenseRow({ state: 'first' }));
    wrap.appendChild(createLicenseRow({ state: 'disabled' }));
    wrap.appendChild(createLicenseRow({ state: 'editing', label: 'Editing the lab' }));
    wrap.appendChild(createLicenseRow({ state: 'edited', label: 'Label Edited and if too long it ...' }));
    return wrap;
  },
};

export const Hierarchy = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;flex-direction:column;gap:8px;width:760px;';
    wrap.appendChild(createSubscriptionRow({ name: 'Studio London', products: 3, licenses: 16, status: 'active', renewal: '31/12/2026', total: '$24,000', active: true, expanded: true }));
    wrap.appendChild(createProductRow({ product: 'Mapping Matter', productSlug: 'Mapping_Matter', licenses: 2, status: 'active' }));
    wrap.appendChild(createLicenseRow({ licenseKey: 'LLC-f7ea8112-as65ds93-dhf45gs9', status: 'active', daysRemaining: 180, assignee: 'Roberto Cavazos', state: 'edited', label: 'Studio A · Master' }));
    wrap.appendChild(createLicenseRow({ licenseKey: 'LLC-b22c1190-9a83fdaa-c01b8ee2', status: 'active', daysRemaining: 180 }));
    wrap.appendChild(createProductRow({ product: 'Renderstream', productSlug: 'Renderstream', licenses: 12, status: 'pending', selected: true }));
    return wrap;
  },
};
