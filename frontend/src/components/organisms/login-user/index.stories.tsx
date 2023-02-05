import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { LoginUser } from '.';

export default {
  title: 'components/organisms/LoginUser',
  component: LoginUser,
  parameters: {}
} as ComponentMeta<typeof LoginUser>;

const Template: ComponentStory<typeof LoginUser> = args => (
  <MemoryRouter>
    <LoginUser {...args} />
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {};
