import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from '.';

export default {
  title: 'components/organisms/Header',
  component: Header,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => (
  <MemoryRouter>
    <Header {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  name: 'sohrab',
  imgUrl: 'https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png'
};
