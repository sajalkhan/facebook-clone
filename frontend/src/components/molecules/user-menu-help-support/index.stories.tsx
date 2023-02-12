import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserMenuHelpSupport } from './';

export default {
  title: 'components/molecules/UserMenuHelpSupport',
  component: UserMenuHelpSupport,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof UserMenuHelpSupport>;

const Template: ComponentStory<typeof UserMenuHelpSupport> = args => <UserMenuHelpSupport {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'ボタン'
};
