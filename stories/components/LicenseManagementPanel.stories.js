import { createLicenseManagementPanel } from './LicenseManagementPanel.js';

export default {
  title: 'Components/Panels/LicenseManagement',
  parameters: { layout: 'centered' },
};

export const Default = { render: () => createLicenseManagementPanel() };
