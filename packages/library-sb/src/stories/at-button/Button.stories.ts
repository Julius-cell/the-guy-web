import { withRouter } from 'storybook-addon-react-router-v6';
import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: any = {
  title: 'Atoms/at-button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
  // Needed to use useNavigate hook from react-router-dom
  decorators: [withRouter],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    labelEsp: 'Pueba Etiqueta',
    labelEng: 'Test Label',
    actionUrl: '#',
    isPrimary: true,
    fileAssets: [],
  },
};
