import { createFaqAccordion } from './FaqAccordion.js';

export default {
  title: 'Components/FaqAccordion',
  parameters: { layout: 'padded' },
};

export const Default = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'max-width:720px;';
    wrap.appendChild(createFaqAccordion());
    return wrap;
  },
};

export const FirstClosed = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'max-width:720px;';
    wrap.appendChild(createFaqAccordion({ openIndex: -1 }));
    return wrap;
  },
};
