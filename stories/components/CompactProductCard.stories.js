import { createCompactProductCard } from './CompactProductCard.js';
import { fn } from 'storybook/test';

export default {
  title: 'Components/Cards/CompactProductCard',
  tags: ['autodocs'],
  argTypes: {
    product: { control: 'text' },
    productSlug: { control: 'select', options: ['Designer Pro', 'Designer Starter', 'Renderstream', 'Mapping_Matter', 'X1'] },
    description: { control: 'text' },
    price: { control: 'text' },
    ctaLabel: { control: 'text' },
    onCta: { action: 'cta' },
  },
  args: {
    product: 'Mapping Matter 2.0',
    productSlug: 'Mapping_Matter',
    description: 'Cloud-based projection mapping',
    price: '$799/mo',
    ctaLabel: 'View Details',
    onCta: fn(),
  },
  render: (args) => createCompactProductCard(args),
  parameters: { layout: 'padded' },
};

export const MappingMatter = {};
export const Renderstream = {
  args: { product: 'Renderstream', productSlug: 'Renderstream', description: 'Real-time rendering integration for in-camera VFX', price: '$2199/mo' },
};

export const MoreProducts = {
  render: () => {
    const w = document.createElement('div');
    w.style.cssText = 'display:flex;flex-direction:column;gap:12px;max-width:760px;';
    w.appendChild(createCompactProductCard({ product: 'Mapping Matter 2.0', productSlug: 'Mapping_Matter', description: 'Cloud-based projection mapping', price: '$799/mo', ctaLabel: 'View Details' }));
    w.appendChild(createCompactProductCard({ product: 'Renderstream', productSlug: 'Renderstream', description: 'Real-time rendering integration for in-camera VFX', price: '$2199/mo', ctaLabel: 'View Details' }));
    return w;
  },
};
