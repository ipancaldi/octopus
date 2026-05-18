import { createFilterLicense } from './FilterLicense.js';

export default {
  title: 'Components/Filters/FilterLicense',
  tags: ['autodocs'],
  argTypes: {
    mobile: { control: 'boolean' },
  },
  args: { mobile: false },
  render: (args) => createFilterLicense(args),
  parameters: { layout: 'padded' },
};

export const Desktop = {};
export const Mobile = { args: { mobile: true } };
export const Partial = {
  args: {
    filters: [
      { label: 'Renderstream', leadingIcon: 'pkg' },
      { label: 'Active', leadingIcon: 'autorenew' },
    ],
  },
};
