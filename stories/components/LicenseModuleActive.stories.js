import { createLicenseModuleActive } from './LicenseModuleActive.js';

export default {
  title: 'Components/Panels/LicenseModuleActive',
  tags: ['autodocs'],
  argTypes: {
    product: { control: 'text' },
    meta: { control: 'text' },
  },
  args: { product: 'Designer Pro', meta: 'License LLC-f7ea8112 · r31+' },
  render: (args) => createLicenseModuleActive(args),
  parameters: { layout: 'centered' },
};

export const Default = {};
export const Renderstream = { args: { product: 'Renderstream', meta: '4 channels active · live' } };
