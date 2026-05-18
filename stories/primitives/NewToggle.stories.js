import { createNewToggle } from './NewToggle.js';
import { fn } from 'storybook/test';

export default {
  title: 'Primitives/NewToggle',
  tags: ['autodocs'],
  argTypes: {
    on: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
  args: { on: true, onChange: fn() },
  render: (args) => createNewToggle(args),
};

export const On = {};
export const Off = { args: { on: false } };

export const States = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;gap:16px;align-items:center;';
    wrap.append(createNewToggle({ on: false }), createNewToggle({ on: true }));
    return wrap;
  },
};
