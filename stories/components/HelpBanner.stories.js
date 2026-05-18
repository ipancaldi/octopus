import { createHelpBanner } from './HelpBanner.js';
import { fn } from 'storybook/test';

export default {
  title: 'Components/HelpBanner',
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    ctaLabel: { control: 'text' },
    icon: { control: 'select', options: ['help', 'visibility', 'shop', 'bell'] },
    onCta: { action: 'cta' },
  },
  args: {
    title: "Not sure what's best for you?",
    description: "We'll recommend the perfect product for your needs.",
    ctaLabel: 'Help Me Choose',
    icon: 'help',
    onCta: fn(),
  },
  render: (args) => createHelpBanner(args),
  parameters: { layout: 'padded' },
};

export const Default = {};
