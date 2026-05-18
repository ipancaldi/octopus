import { createSubscriptionPanel } from './SubscriptionPanel.js';

export default {
  title: 'Components/Panels/SubscriptionPanel',
  parameters: { layout: 'centered' },
};

export const Default = { render: () => createSubscriptionPanel() };

export const Trial = {
  render: () => createSubscriptionPanel({
    name: 'Pilot Workspace',
    status: 'trial',
    renewal: '15/06/2026',
    total: 'Free trial · upgrade anytime',
    autoRenew: false,
    hierarchy: [
      { kind: 'product', product: 'Designer Starter', productSlug: 'Designer Starter', licenses: 1, status: 'trial' },
      { kind: 'license', licenseKey: 'LLC-trial-9c01dd33-aab2bbcc', status: 'trial', daysRemaining: 30, assignee: 'Sasha Patel' },
    ],
  }),
};
