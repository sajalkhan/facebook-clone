import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ActivateForm } from './';

export default {
  title: 'components/atoms/ActivateForm',
  component: ActivateForm,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof ActivateForm>;

const Template: ComponentStory<typeof ActivateForm> = args => <ActivateForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  type: 'success',
  header: 'Account verification succeeded.',
  text: 'Account successfully activated!',
  loading: true
};
