import { createProductTierCard, createTierToggle } from './ProductTierCard.js';
import { fn } from 'storybook/test';

export default {
  title: 'Components/Cards/ProductTierCard',
  parameters: { layout: 'padded' },
};

const TIERS = [
  {
    product: 'D3 Starter',
    productSlug: 'Designer Starter',
    description: "Your version of Designer for learning, training, school projects, and getting started with Disguise.",
    price: 'Free',
    features: ['Online registration', '1.0 model · 1 user license', 'No extension functions', 'Software upgrades', 'Community support'],
    ctaLabel: 'Get Started',
  },
  {
    product: 'D3 Pro',
    productSlug: 'Designer Pro',
    description: 'For licensed sessions with extensions, expandable software for theatrical, broadcast, and live events.',
    price: '$1500',
    features: ['Online registration', 'Pro plug-ins · 4 user seats', 'Add pre-rolls, lighting, scenic boxes', 'Software upgrades', 'Priority support'],
    ctaLabel: 'Buy Now',
  },
  {
    product: 'D3 X',
    productSlug: 'X1',
    description: 'Production-grade access with extensive media and project management features for advanced productions.',
    price: '$400',
    features: ['Online registration', 'Pro plug-ins · 1 user seat', 'Project library / unified scratch', 'Software upgrades', 'Premium 24/7 support'],
    ctaLabel: 'Buy Now',
  },
  {
    product: 'D3 Server',
    productSlug: 'Renderstream',
    description: 'Your version of Designer for hosting workshops, online courses, and team enterprise sessions.',
    price: 'Contact Sales',
    priceMode: 'quote',
    features: ['Tailor to your need', 'Project library / unified scratch', 'On-demand premium training', 'Premium 24/7 support', 'Account manager onboarding'],
    ctaLabel: 'Contact Sales',
  },
];

export const Starter = { render: () => createProductTierCard(TIERS[0]) };
export const Pro = { render: () => createProductTierCard(TIERS[1]) };
export const X = { render: () => createProductTierCard(TIERS[2]) };
export const Server = { render: () => createProductTierCard(TIERS[3]) };

export const Row = {
  parameters: { layout: 'fullscreen' },
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'padding:32px;background:var(--do-header-bg);';
    const toggle = createTierToggle({
      options: [{ label: 'Quote', value: 'quote' }, { label: 'Buy Now', value: 'buy' }],
      value: 'quote',
      onChange: fn(),
    });
    const toggleWrap = document.createElement('div');
    toggleWrap.style.cssText = 'display:flex;justify-content:center;margin-bottom:24px;';
    toggleWrap.appendChild(toggle);
    wrap.appendChild(toggleWrap);
    const row = document.createElement('div');
    row.className = 'do-tier-row';
    TIERS.forEach((t) => row.appendChild(createProductTierCard(t)));
    wrap.appendChild(row);
    return wrap;
  },
};

export const TierToggle = {
  render: () => createTierToggle({ onChange: fn() }),
};
