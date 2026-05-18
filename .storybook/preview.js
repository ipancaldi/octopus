import '../stories/tokens.css';

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'card', value: '#f8fafc' },
        { name: 'dark', value: '#101828' },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'do-root';
      wrapper.style.padding = '24px';
      const story = Story();
      wrapper.appendChild(typeof story === 'string'
        ? Object.assign(document.createElement('div'), { innerHTML: story })
        : story);
      return wrapper;
    },
  ],
};

export default preview;
