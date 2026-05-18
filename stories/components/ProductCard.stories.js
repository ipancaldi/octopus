import { createProductCard } from './ProductCard.js';
import { fn } from 'storybook/test';

export default {
  title: 'Components/Cards/ProductCard',
  tags: ['autodocs'],
  argTypes: {
    product: { control: 'text' },
    productSlug: { control: 'select', options: ['Designer Pro', 'Designer Starter', 'Renderstream', 'Mapping_Matter', 'X1'] },
    description: { control: 'text' },
    price: { control: 'text' },
    licenses: { control: 'number' },
    selected: { control: 'boolean' },
    onQtyChange: { action: 'qty' },
  },
  args: {
    product: 'Designer Starter',
    productSlug: 'Designer Starter',
    description: 'Perfect for learning and exploring Disguise with free access',
    price: '$159',
    licenses: 2,
    selected: false,
    onQtyChange: fn(),
  },
  render: (args) => createProductCard(args),
  parameters: { layout: 'padded' },
};

export const Starter = {};
export const Pro = {
  args: {
    product: 'Designer Pro',
    productSlug: 'Designer Pro',
    description: 'Professional toolchain for production rigging and rehearsals',
    price: '$1,299',
    licenses: 5,
    selected: true,
  },
};
export const Renderstream = {
  args: {
    product: 'Renderstream',
    productSlug: 'Renderstream',
    description: 'High-performance render output and broadcast pipelines',
    price: '$3,499',
    licenses: 3,
  },
};
