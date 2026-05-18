import { createToggle } from './Toggle.js';
import { fn } from 'storybook/test';

export default {
  title: 'Primitives/Toggle',
  tags: ['autodocs'],
  argTypes: {
    on: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
  args: { on: true, disabled: false, onChange: fn() },
  render: (args) => createToggle(args),
};

export const On = {};
export const Off = { args: { on: false } };
export const Disabled = { args: { disabled: true } };

export const States = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;gap:16px;align-items:center;';
    wrap.append(createToggle({ on: false }), createToggle({ on: true }), createToggle({ on: true, disabled: true }));
    return wrap;
  },
};
