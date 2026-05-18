import { createComparisonTable } from './ComparisonTable.js';

export default {
  title: 'Components/ComparisonTable',
  parameters: { layout: 'padded' },
};

export const Default = { render: () => createComparisonTable() };

export const TwoProducts = {
  render: () => createComparisonTable({
    products: [
      { product: 'Designer Pro', tier: 'Pro', productSlug: 'Designer Pro' },
      { product: 'D3 X Range', tier: '$400/mo', productSlug: 'X1' },
    ],
    rows: [
      { feature: 'Pro plug-ins', values: [true, true] },
      { feature: 'Project library', values: [false, true] },
      { feature: 'Premium 24/7 support', values: [false, true] },
      { feature: 'Account manager', values: [false, false] },
    ],
  }),
};
