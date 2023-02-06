import { ComponentMeta, ComponentStory } from '@storybook/react';
import RegisterInput from './';
import withFormik from '@bbbtech/storybook-formik';

export default {
  title: 'components/atoms/RegisterInput',
  component: RegisterInput,
  decorators: [withFormik],
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof RegisterInput>;

const Template: ComponentStory<typeof RegisterInput> = args => <RegisterInput {...args} />;

export const FirstName = Template.bind({});
FirstName.args = {
  name: 'first_name',
  placeholder: 'Enter first name',
  type: 'text'
};

export const LastName = Template.bind({});
LastName.args = {
  name: 'last_name',
  placeholder: 'Enter last name',
  type: 'text'
};

export const Email = Template.bind({});
Email.args = {
  name: 'email',
  placeholder: 'Enter your email',
  type: 'text'
};

export const Password = Template.bind({});
Password.args = {
  name: 'password',
  placeholder: 'Enter your password',
  type: 'password'
};
