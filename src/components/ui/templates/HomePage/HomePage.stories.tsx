import { Story, Meta } from '@storybook/react';

import HomePage from './HomePage';

export default {
  title: 'HomePage',
  component: HomePage
} as Meta;

export const Basic: Story = () => <HomePage />;