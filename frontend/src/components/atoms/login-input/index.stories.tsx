import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoginInput from './';
import withFormik from '@bbbtech/storybook-formik';

export default {
  title: 'components/atoms/LoginInput',
  component: LoginInput,
  decorators: [withFormik],
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof LoginInput>;

const Template: ComponentStory<typeof LoginInput> = args => <LoginInput {...args} />;
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
Normal.args = {
  name: 'email',
  placeholder: 'Email and password',
  type: 'text'
};

export const Secondary = Template.bind({});
Secondary.args = {
  name: 'password',
  placeholder: 'Password',
  type: 'password',
  bottom: true
};
