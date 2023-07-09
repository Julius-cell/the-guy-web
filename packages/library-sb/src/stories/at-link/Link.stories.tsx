import { Link } from './Link';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Atoms/at-link',
  component: Link,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LinkBlank: Story = {
  args: {
    title: 'link default',
    label: 'Home',
    actionType: '_blank',
    actionUrl: '#',
    subLinks: [],
  },
};

export const LinktSelf: Story = {
  args: {
    title: 'link default',
    label: 'Home',
    actionType: '_self',
    actionUrl: '#',
    subLinks: [],
  },
};
