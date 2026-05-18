import { createButton } from './Button.js';
import { fn } from 'storybook/test';

export default {
  title: 'Primitives/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'accent'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    label: { control: 'text' },
    leadingIcon: { control: 'boolean' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
  args: {
    label: 'Add subscription',
    variant: 'secondary',
    size: 'md',
    leadingIcon: true,
    disabled: false,
    onClick: fn(),
  },
  render: (args) => createButton(args),
};

export const Secondary = {};

export const Primary = { args: { variant: 'primary', leadingIcon: false, label: 'Save changes' } };

export const Accent = { args: { variant: 'accent', leadingIcon: false, label: 'Upgrade plan' } };

export const Ghost = { args: { variant: 'ghost', leadingIcon: false, label: 'Cancel' } };

export const WithLeadingIcon = { args: { leadingIcon: true } };

export const Disabled = { args: { disabled: true } };

export const AllVariants = {
  parameters: { layout: 'padded' },
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:grid;grid-template-columns:repeat(4,max-content);gap:16px;align-items:center;';
    const variants = ['primary', 'secondary', 'ghost', 'accent'];
    const sizes = ['sm', 'md', 'lg'];
    sizes.forEach((size) => {
      variants.forEach((variant) => {
        wrap.appendChild(createButton({ label: variant, variant, size, leadingIcon: variant !== 'primary' }));
      });
    });
    return wrap;
  },
};
