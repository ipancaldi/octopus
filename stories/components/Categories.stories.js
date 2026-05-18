import { createCategories } from './Categories.js';
import { fn } from 'storybook/test';

export default {
  title: 'Components/Filters/Categories',
  tags: ['autodocs'],
  args: { onChange: fn() },
  render: (args) => createCategories(args),
  parameters: { layout: 'padded' },
};

export const All = {};
export const NoCounts = {
  args: {
    items: [
      { label: 'All', active: true },
      { label: 'Renderstream' },
      { label: 'Designer Pro' },
      { label: 'Mapping Matter' },
    ],
  },
};
