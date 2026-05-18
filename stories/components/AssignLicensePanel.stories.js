import { createAssignLicensePanel } from './AssignLicensePanel.js';
import { fn } from 'storybook/test';

export default {
  title: 'Components/Panels/AssignLicense',
  parameters: { layout: 'centered' },
  args: { onCancel: fn(), onAssign: fn() },
};

export const Panel = { render: (args) => createAssignLicensePanel(args) };

export const Modal = {
  parameters: { layout: 'fullscreen' },
  render: (args) => {
    const stage = document.createElement('div');
    stage.className = 'do-modal-stage';
    stage.style.minHeight = '520px';
    stage.appendChild(createAssignLicensePanel({ ...args, modal: true }));
    return stage;
  },
};
