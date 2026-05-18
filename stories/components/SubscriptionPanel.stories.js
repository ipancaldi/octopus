import { createSubscriptionPanel } from './SubscriptionPanel.js';

export default {
  title: 'Components/Panels/SubscriptionPanel',
  parameters: { layout: 'fullscreen' },
};

const stage = (width, content) => {
  const wrap = document.createElement('div');
  wrap.style.cssText = `padding:24px;background:var(--do-header-bg);min-height:100vh;`;
  const frame = document.createElement('div');
  frame.style.cssText = `width:${width};margin:0 auto;border:1px dashed var(--do-card-stroke);border-radius:12px;`;
  frame.appendChild(content);
  wrap.appendChild(frame);
  return wrap;
};

export const Default = { render: () => stage('780px', createSubscriptionPanel()) };

export const Narrow = { render: () => stage('600px', createSubscriptionPanel()) };

export const Mobile = { render: () => stage('360px', createSubscriptionPanel()) };

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
