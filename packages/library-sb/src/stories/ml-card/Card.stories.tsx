import { Card } from './Card';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Organisms/or-card',
  component: Card,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardDefault: Story = {
  args: {
    title: 'About default',
    cardTitle: 'About',
    description: 'Lorem ipsum lalala lalala',
    link: '',
    image: {},
    personDetails: {
      title: 'Person default',
      name: 'Julio Cid',
      address: 'Santiago, Chile',
      age: 27,
      experience: 'Frontend Engineer',
      phone: '971548116',
      links: [
        {
          title: 'link default',
          label: 'Home',
          actionType: '_blank',
          actionUrl: '#',
          subLinks: [],
        },
      ],
    },
  },
};
