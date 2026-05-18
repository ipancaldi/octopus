import { createTopNav } from './TopNav.js';

export default {
  title: 'Components/Nav/TopNav',
  tags: ['autodocs'],
  argTypes: {
    cartCount: { control: { type: 'number', min: 0, max: 99 } },
    initials: { control: 'text' },
    mobile: { control: 'boolean' },
  },
  args: { cartCount: 1, initials: 'W', mobile: false },
  parameters: { layout: 'fullscreen' },
  render: (args) => createTopNav(args),
};

export const Desktop = {};
export const DesktopEmptyCart = { args: { cartCount: 0 } };
export const Mobile = { args: { mobile: true } };
