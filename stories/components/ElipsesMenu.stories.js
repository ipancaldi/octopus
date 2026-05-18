import { createElipsesMenu, createElipsesMenuItem } from './ElipsesMenu.js';
import { fn } from 'storybook/test';

export default {
  title: 'Components/Menus/ElipsesMenu',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export const Default = {
  render: () => createElipsesMenu(),
};

export const License = {
  render: () => createElipsesMenu({
    items: [
      { label: 'Edit License', icon: 'edit', active: true },
      { label: 'Reassign', icon: 'sync' },
      { label: 'Copy License Key', icon: 'copy' },
      { label: 'Remove License', icon: 'delete', danger: true },
    ],
  }),
};

export const SingleItem = {
  render: () => {
    const w = document.createElement('div');
    w.className = 'do-emenu';
    w.appendChild(createElipsesMenuItem({ label: 'Resend Invite', icon: 'sync', onClick: fn() }));
    return w;
  },
};
