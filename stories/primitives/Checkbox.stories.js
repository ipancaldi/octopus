import { createCheckbox } from './Checkbox.js';
import { fn } from 'storybook/test';

export default {
  title: 'Primitives/Checkbox',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
  args: { label: 'Auto-renew', checked: false, disabled: false, onChange: fn() },
  render: (args) => createCheckbox(args),
};

export const Unchecked = {};
export const Checked = { args: { checked: true } };
export const Disabled = { args: { disabled: true } };
export const DisabledChecked = { args: { disabled: true, checked: true } };

export const States = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:grid;grid-template-columns:max-content;gap:12px;';
    [
      { label: 'Unchecked', checked: false },
      { label: 'Checked', checked: true },
      { label: 'Disabled', disabled: true },
      { label: 'Disabled + checked', disabled: true, checked: true },
    ].forEach((p) => wrap.appendChild(createCheckbox(p)));
    return wrap;
  },
};
