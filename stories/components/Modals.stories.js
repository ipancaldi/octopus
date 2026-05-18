import { createPendingModal, createAddProductModal } from './Modals.js';

export default {
  title: 'Components/Modals',
  parameters: { layout: 'fullscreen' },
};

export const Pending = { render: () => createPendingModal() };

export const PendingMixed = {
  render: () => createPendingModal({
    pending: [
      { kind: 'add-product', product: 'X1', productSlug: 'X1' },
      { kind: 'remove-product', product: 'Designer Starter', productSlug: 'Designer Starter' },
      { kind: 'add-license', product: 'Renderstream', productSlug: 'Renderstream' },
      { kind: 'remove-license', product: 'Mapping Matter', productSlug: 'Mapping_Matter' },
    ],
  }),
};

export const AddProduct = { render: () => createAddProductModal() };
