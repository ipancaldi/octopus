import { createTabs } from './Tabs.js';
import { fn } from 'storybook/test';

export default {
  title: 'Primitives/Tabs',
  tags: ['autodocs'],
  argTypes: {
    selectedIndex: { control: { type: 'number', min: 0, max: 4 } },
    onChange: { action: 'changed' },
  },
  args: { selectedIndex: 0, onChange: fn() },
  render: (args) => createTabs(args),
};

export const SubscriptionsBilling = {};

export const TwoTabs = {
  args: {
    items: [
      { label: 'Subscriptions', icon: 'pkg' },
      { label: 'Licenses', icon: 'key' },
    ],
  },
};

export const NoIcons = {
  args: {
    items: [
      { label: 'Overview' },
      { label: 'Details' },
      { label: 'Activity' },
    ],
  },
};
