import { createTagsStatus } from './TagsStatus.js';

export default {
  title: 'Primitives/TagsStatus',
  tags: ['autodocs'],
  argTypes: {
    status: { control: 'select', options: ['active', 'pending', 'trial', 'expired', 'inactive'] },
    label: { control: 'text' },
    mobile: { control: 'boolean' },
  },
  args: { status: 'active', mobile: false },
  render: (args) => createTagsStatus(args),
};

export const Active = {};
export const Pending = { args: { status: 'pending' } };
export const Trial = { args: { status: 'trial' } };
export const Expired = { args: { status: 'expired' } };
export const Inactive = { args: { status: 'inactive' } };
export const Mobile = { args: { mobile: true } };

export const AllStatuses = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;align-items:center;';
    ['active', 'pending', 'trial', 'expired', 'inactive'].forEach((s) => wrap.appendChild(createTagsStatus({ status: s })));
    wrap.appendChild(document.createTextNode(' | mobile: '));
    ['active', 'pending', 'trial', 'expired', 'inactive'].forEach((s) => wrap.appendChild(createTagsStatus({ status: s, mobile: true })));
    return wrap;
  },
};
