import { createTooltip } from './Tooltip.js';
import { createButton } from './Button.js';

export default {
  title: 'Primitives/Tooltip',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    placement: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    text: { control: 'text' },
    open: { control: 'boolean' },
  },
  args: { placement: 'top', text: 'Add to subscription', open: false },
  render: (args) => createTooltip({
    target: createButton({ label: 'Hover me', variant: 'secondary', leadingIcon: false }),
    ...args,
  }),
};

export const Top = {};
export const Bottom = { args: { placement: 'bottom' } };
export const Left = { args: { placement: 'left' } };
export const Right = { args: { placement: 'right' } };
export const AlwaysOpen = { args: { open: true } };

export const Placements = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:grid;grid-template-columns:repeat(2,180px);gap:40px;padding:80px;';
    ['top', 'bottom', 'left', 'right'].forEach((p) => {
      wrap.appendChild(createTooltip({
        target: createButton({ label: p, variant: 'ghost', leadingIcon: false }),
        text: `Tooltip · ${p}`,
        placement: p,
        open: true,
      }));
    });
    return wrap;
  },
};
