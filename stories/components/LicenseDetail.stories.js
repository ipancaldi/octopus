import { createLicenseDetail } from './LicenseDetail.js';

export default {
  title: 'Components/Panels/LicenseDetail',
  tags: ['autodocs'],
  argTypes: {
    proKey: { control: 'text' },
    legacyKey: { control: 'text' },
    status: { control: 'select', options: ['active', 'pending', 'trial', 'expired', 'inactive'] },
    planType: { control: 'text' },
    startDate: { control: 'text' },
    renewalDate: { control: 'text' },
    autoRenew: { control: 'boolean' },
    assignee: { control: 'text' },
  },
  args: {
    proKey: 'LLC-f7ea8112-as65ds93-dhf45gs9',
    legacyKey: 'LLC-f7ea8112-as65ds93-dhf45gs9',
    status: 'active',
    planType: 'Annual',
    startDate: '01/01/2025',
    renewalDate: '31/12/2026',
    autoRenew: true,
    assignee: '',
  },
  render: (args) => createLicenseDetail(args),
  parameters: { layout: 'centered' },
};

export const Unassigned = {};
export const Assigned = { args: { assignee: 'Roberto Cavazos' } };
export const Trial = { args: { status: 'trial', planType: 'Monthly', autoRenew: false } };
