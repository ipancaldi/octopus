import { createSubscriptionCard } from './SubscriptionCard.js';

export default {
  title: 'Components/Cards/SubscriptionCard',
  tags: ['autodocs'],
  argTypes: {
    product: { control: 'text' },
    productSlug: { control: 'select', options: ['Designer Pro', 'Designer Starter', 'Renderstream', 'Mapping_Matter', 'X1'] },
    status: { control: 'select', options: ['active', 'pending', 'trial', 'expired', 'inactive'] },
    totalLicenses: { control: 'number' },
    assigned: { control: 'number' },
    renewal: { control: 'text' },
  },
  args: {
    product: 'Designer Pro',
    productSlug: 'Designer Pro',
    status: 'active',
    totalLicenses: 12,
    assigned: 8,
    renewal: '12/03/2026',
  },
  render: (args) => createSubscriptionCard(args),
  parameters: { layout: 'centered' },
};

export const DesignerPro = {};
export const Renderstream = { args: { product: 'Renderstream', productSlug: 'Renderstream', totalLicenses: 4, assigned: 4 } };
export const Trial = { args: { status: 'trial' } };

export const Grid = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px;max-width:900px;';
    [
      { product: 'Designer Pro', productSlug: 'Designer Pro', status: 'active', totalLicenses: 12, assigned: 8, renewal: '12/03/2026' },
      { product: 'Designer Starter', productSlug: 'Designer Starter', status: 'trial', totalLicenses: 1, assigned: 1, renewal: '20/03/2026' },
      { product: 'Renderstream', productSlug: 'Renderstream', status: 'active', totalLicenses: 4, assigned: 4, renewal: '01/12/2026' },
      { product: 'Mapping Matter', productSlug: 'Mapping_Matter', status: 'pending', totalLicenses: 2, assigned: 0, renewal: '15/04/2026' },
      { product: 'X1', productSlug: 'X1', status: 'expired', totalLicenses: 2, assigned: 0, renewal: '01/01/2026' },
    ].forEach((p) => wrap.appendChild(createSubscriptionCard(p)));
    return wrap;
  },
};
