import { LoginUser } from '.';
import { store } from 'store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'components/organisms/LoginUser',
  component: LoginUser,
  parameters: {}
} as ComponentMeta<typeof LoginUser>;

const Template: ComponentStory<typeof LoginUser> = args => (
  <MemoryRouter>
    <Provider store={store}>
      <LoginUser {...args} />
    </Provider>
  </MemoryRouter>
);

export const Normal = Template.bind({});
Normal.args = {};
