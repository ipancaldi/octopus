import { createRadio, createRadioGroup } from './Radio.js';
import { fn } from 'storybook/test';

export default {
  title: 'Primitives/Radio',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    filled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
  args: { label: 'Annual plan', checked: false, disabled: false, filled: false, onChange: fn() },
  render: (args) => createRadio(args),
};

export const Unchecked = {};
export const Checked = { args: { checked: true } };
export const Filled = { args: { filled: true, checked: true } };
export const Disabled = { args: { disabled: true } };

export const Group = {
  render: () => createRadioGroup({
    name: 'plan',
    value: 'annual',
    options: [
      { label: 'Annual plan', value: 'annual' },
      { label: 'Monthly plan', value: 'monthly' },
      { label: 'Pay as you go', value: 'payg', disabled: true },
    ],
    onChange: fn(),
  }),
};

export const GroupRow = {
  render: () => createRadioGroup({
    name: 'tier',
    value: 'pro',
    layout: 'row',
    options: [
      { label: 'Starter', value: 'starter' },
      { label: 'Pro', value: 'pro' },
      { label: 'Studio', value: 'studio' },
    ],
    onChange: fn(),
  }),
};
