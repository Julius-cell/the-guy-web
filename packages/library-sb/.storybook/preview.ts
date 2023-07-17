import '../src/index.css';
import type { Preview } from '@storybook/react';

const customViewports = {
  mobile: {
    name: 'SM (mobile)',
    styles: {
      width: '360px',
      height: '640px',
    },
  },
  tablet: {
    name: 'MD (tablet)',
    styles: {
      width: '680px',
      height: '960px',
    },
  },
  regular: {
    name: 'LG (desktop)',
    styles: {
      width: '1366px',
      height: '768px',
    },
  },
};

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: customViewports,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
