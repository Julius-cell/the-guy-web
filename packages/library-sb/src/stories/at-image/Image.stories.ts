import { Image } from './Image';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/at-image',
  component: Image,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {},
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageDefault: Story = {
  args: {
    image: '/black-and-white.jpeg',
    altText: 'the-web-guy',
  },
};
