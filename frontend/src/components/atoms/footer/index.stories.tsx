import { Footer } from '.';
import { MemoryRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'components/atoms/Footer',
  component: Footer,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => (
  <MemoryRouter>
    <Footer />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {};
