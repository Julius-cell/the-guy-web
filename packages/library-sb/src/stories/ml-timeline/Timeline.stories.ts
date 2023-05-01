import { Timeline } from './Timeline';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Molecules/ml-timeline',
  component: Timeline,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageDefault: Story = {
  args: {
    projects: [
      {
        projectName: 'Harvard University migration',
        description: '',
        stack: ['Atomic design components', 'TailwindCSS', 'ReactJS', 'Storybook', 'Contentful', 'Chromatic'],
      },
      {
        projectName: 'Socofar migration',
        description: '',
        stack: ['Atomic design components', 'TailwindCSS', 'Angular', 'Storybook', 'Contentful'],
      },
      {
        projectName: 'A bunch of past projects',
        description: '',
        stack: ['NodeJS', 'Angular', 'MongoDB', 'Typescript', 'Contentful'],
      },
    ],
  },
};
