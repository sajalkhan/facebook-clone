import { store } from 'store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SearchAccountForm } from '.';

export default {
  title: 'components/molecules/SearchAccountForm',
  component: SearchAccountForm,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof SearchAccountForm>;

const Template: ComponentStory<typeof SearchAccountForm> = args => (
  <MemoryRouter>
    <Provider store={store}>
      <SearchAccountForm {...args} />
    </Provider>
  </MemoryRouter>
);

export const CodeVerification = Template.bind({});
CodeVerification.args = {};
