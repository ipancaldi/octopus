import { createCartItem } from './CartItem.js';
import { fn } from 'storybook/test';

export default {
  title: 'Components/Cards/CartItem',
  tags: ['autodocs'],
  argTypes: {
    product: { control: 'text' },
    productSlug: { control: 'select', options: ['Designer Pro', 'Designer Starter', 'Renderstream', 'Mapping_Matter', 'X1'] },
    startDate: { control: 'text' },
    licenses: { control: 'number' },
    unitPrice: { control: 'text' },
    totalPrice: { control: 'text' },
    onRemove: { action: 'removed' },
  },
  args: {
    product: 'Disguise X1',
    productSlug: 'X1',
    startDate: '01/01/2025',
    licenses: 2,
    unitPrice: '$12,000',
    totalPrice: '$24,000',
    onRemove: fn(),
  },
  render: (args) => createCartItem(args),
  parameters: { layout: 'centered' },
};

export const X1 = {};
export const Renderstream = {
  args: { product: 'Renderstream', productSlug: 'Renderstream', licenses: 4, unitPrice: '$3,499', totalPrice: '$13,996' },
};
export const Stack = {
  render: () => {
    const w = document.createElement('div');
    w.style.cssText = 'display:flex;flex-direction:column;gap:8px;max-width:520px;';
    w.appendChild(createCartItem());
    w.appendChild(createCartItem({ product: 'Renderstream', productSlug: 'Renderstream', licenses: 4, unitPrice: '$3,499', totalPrice: '$13,996' }));
    w.appendChild(createCartItem({ product: 'Designer Pro', productSlug: 'Designer Pro', licenses: 1, unitPrice: '$1,299', totalPrice: '$1,299' }));
    return w;
  },
};
