import { createTextInput } from './TextInput.js';
import { fn } from 'storybook/test';

export default {
  title: 'Primitives/TextInput',
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    numeric: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onInput: { action: 'input' },
  },
  args: { value: '1', numeric: true, fullWidth: false, disabled: false, onInput: fn() },
  render: (args) => createTextInput(args),
};

export const Quantity = {};
export const QuantityEmpty = { args: { value: '', placeholder: '0' } };
export const FullWidthText = { args: { numeric: false, value: '', placeholder: 'Search subscriptions...', fullWidth: true } };
export const Disabled = { args: { value: '12', disabled: true } };
