import { LoginForm } from '.';
import { MemoryRouter } from 'react-router-dom';
import withFormik from '@bbbtech/storybook-formik';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'components/molecules/LoginForm',
  component: LoginForm,
  decorators: [withFormik],
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = args => (
  <MemoryRouter>
    <LoginForm {...args} />
  </MemoryRouter>
);

Template.parameters = {
  formik: {
    initialValues: {
      name: ''
    },
    validateOnBlur: true,
    validationSchema: {
      email: 'Email is required',
      password: 'Password in required'
    }
  }
};

export const Normal = Template.bind({});
Normal.args = {};
