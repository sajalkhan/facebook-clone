import { store } from 'store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CodeVerificationForm } from '.';

export default {
  title: 'components/molecules/CodeVerificationForm',
  component: CodeVerificationForm,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof CodeVerificationForm>;

const Template: ComponentStory<typeof CodeVerificationForm> = args => (
  <MemoryRouter>
    <Provider store={store}>
      <CodeVerificationForm {...args} />
    </Provider>
  </MemoryRouter>
);

export const CodeVerification = Template.bind({});
CodeVerification.args = {};
