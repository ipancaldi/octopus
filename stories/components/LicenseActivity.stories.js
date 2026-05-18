import { createLicenseActivity } from './LicenseActivity.js';

export default {
  title: 'Components/Panels/LicenseActivity',
  parameters: { layout: 'centered' },
};

export const Default = { render: () => createLicenseActivity() };
export const Empty = {
  render: () => createLicenseActivity({ events: [] }),
};
