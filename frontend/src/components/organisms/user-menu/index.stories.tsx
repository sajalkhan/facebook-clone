import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { UserMenu } from '.';

export default {
  title: 'components/organisms/UserMenu',
  component: UserMenu,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof UserMenu>;

const Template: ComponentStory<typeof UserMenu> = args => (
  <MemoryRouter>
    <UserMenu {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {
  first_name: 'sajal',
  last_name: 'khan',
  imgUrl: 'https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png'
};
