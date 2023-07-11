import { Header } from './Header';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Organisms/or-header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderDefault: Story = {
  args: {
    title: 'Header Home Page',
    hero: {
      title: 'Hero Home Page',
      heroTitle: 'the-web-guy',
      description: 'Transformando Ideas en atractivas experiencias on-line.',
      heroAssets: [
        {
          altText: 'the-web-guy',
          desktopAsset: {
            file: {
              // url: '/black-and-white.jpeg',
            },
          },
        },
      ],
    },
    categories: [
      {
        title: 'link default',
        label: 'Home',
        actionType: '_self',
        actionUrl: '#',
        subLinks: [],
      },
      {
        title: 'link default',
        label: 'About',
        actionType: '_self',
        actionUrl: '#',
        subLinks: [],
      },
    ],
  },
};
