import { createPageTitleCrumbs } from './PageTitleCrumbs.js';

export default {
  title: 'Components/Nav/PageTitleCrumbs',
  tags: ['autodocs'],
  argTypes: {
    crumbs: { control: 'object' },
    current: { control: 'text' },
  },
  args: { crumbs: ['Subscriptions'], current: 'My Subscriptions' },
  render: (args) => createPageTitleCrumbs(args),
  parameters: { layout: 'padded' },
};

export const MySubscriptions = {};
export const Deep = { args: { crumbs: ['Subscriptions', 'Renderstream'], current: 'Edit license' } };
export const RootOnly = { args: { crumbs: [], current: 'Dashboard' } };
