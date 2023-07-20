import { GridSection } from './Grid-section';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Organisms/or-card',
  component: GridSection,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof GridSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GridSectionDefault: Story = {
  args: {},
};
