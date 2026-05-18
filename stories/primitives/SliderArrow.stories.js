import { createSliderArrow } from './SliderArrow.js';
import { fn } from 'storybook/test';

export default {
  title: 'Primitives/SliderArrow',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    direction: { control: 'select', options: ['left', 'right'] },
    size: { control: 'select', options: ['md', 'sm'] },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  args: { direction: 'right', size: 'md', disabled: false, onClick: fn() },
  render: (args) => createSliderArrow(args),
};

export const Right = {};
export const Left = { args: { direction: 'left' } };
export const Small = { args: { size: 'sm' } };
export const Disabled = { args: { disabled: true } };

export const Pair = {
  render: () => {
    const w = document.createElement('div');
    w.style.cssText = 'display:flex;gap:8px;align-items:center;';
    w.appendChild(createSliderArrow({ direction: 'left' }));
    w.appendChild(createSliderArrow({ direction: 'right' }));
    return w;
  },
};
