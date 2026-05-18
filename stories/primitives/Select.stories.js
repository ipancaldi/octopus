import { createSelect } from './Select.js';
import { fn } from 'storybook/test';

export default {
  title: 'Primitives/Select',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    leadingIcon: { control: 'select', options: ['person', 'pkg', 'key', 'language', null] },
    trailingIcon: { control: 'select', options: ['chevronDown', 'chevronRight', null] },
    width: { control: 'text' },
    onClick: { action: 'clicked' },
  },
  args: { label: 'Unassigned', leadingIcon: 'person', trailingIcon: 'chevronDown', onClick: fn() },
  render: (args) => createSelect(args),
};

export const Default = {};
export const NoLeading = { args: { leadingIcon: null } };
export const Assigned = { args: { label: 'Roberto Cavazos' } };
export const Wide = { args: { label: 'Renderstream — 12 channels', width: 260 } };

export const Variants = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;flex-direction:column;gap:8px;align-items:flex-start;';
    [
      { label: 'Unassigned', leadingIcon: 'person' },
      { label: 'Roberto Cavazos', leadingIcon: 'person' },
      { label: 'Renderstream', leadingIcon: 'pkg' },
      { label: 'English (US)', leadingIcon: 'language' },
    ].forEach((p) => wrap.appendChild(createSelect(p)));
    return wrap;
  },
};
