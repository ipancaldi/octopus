import { createTag } from './Tag.js';

export default {
  title: 'Primitives/Tag',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    color: { control: 'select', options: ['aquamarine', 'violet', 'pink', 'grey'] },
  },
  args: { label: 'Active', color: 'aquamarine' },
  render: (args) => createTag(args),
};

export const Aquamarine = {};
export const Violet = { args: { color: 'violet', label: 'Trial' } };
export const Pink = { args: { color: 'pink', label: 'Pending' } };
export const Grey = { args: { color: 'grey', label: 'Expired' } };

export const AllColors = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;gap:8px;flex-wrap:wrap;';
    [
      { color: 'aquamarine', label: 'Active' },
      { color: 'violet', label: 'Trial' },
      { color: 'pink', label: 'Pending' },
      { color: 'grey', label: 'Expired' },
    ].forEach((p) => wrap.appendChild(createTag(p)));
    return wrap;
  },
};
