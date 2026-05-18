import { createTextArea } from './TextArea.js';
import { fn } from 'storybook/test';

export default {
  title: 'Primitives/TextArea',
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    rows: { control: { type: 'number', min: 2, max: 12 } },
    disabled: { control: 'boolean' },
    onInput: { action: 'input' },
  },
  args: { value: '', placeholder: 'Add a note about this license…', rows: 4, disabled: false, onInput: fn() },
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'width:400px;';
    wrap.appendChild(createTextArea(args));
    return wrap;
  },
};

export const Empty = {};
export const WithValue = { args: { value: 'Studio London — license rotated 2025-09-12 by Emilie.' } };
export const Disabled = { args: { disabled: true, value: 'Read-only note' } };
