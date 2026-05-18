import { createNavLeft } from './NavLeft.js';

export default {
  title: 'Components/Nav/NavLeft',
  parameters: { layout: 'fullscreen' },
  argTypes: {
    storageUsedGB: { control: 'number' },
    storageTotalGB: { control: 'number' },
    notifications: { control: 'number' },
  },
  args: { storageUsedGB: 0.136, storageTotalGB: 1000, notifications: 1 },
  render: (args) => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'background:var(--do-header-bg);padding:0;min-height:900px;';
    wrap.appendChild(createNavLeft(args));
    return wrap;
  },
};

export const Open = {};
export const Collapsed = { args: { collapsed: true } };
export const StorageNearFull = { args: { storageUsedGB: 870, storageTotalGB: 1000 } };
export const NoNotifications = { args: { notifications: 0 } };

export const SideBySide = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;gap:24px;background:var(--do-header-bg);min-height:900px;align-items:flex-start;padding:24px;';
    wrap.appendChild(createNavLeft());
    wrap.appendChild(createNavLeft({ collapsed: true }));
    return wrap;
  },
};
