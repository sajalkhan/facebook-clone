import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserMenuItem } from 'components/atoms/user-menu-item';
import { UserMenuOptions } from '.';

export default {
  title: 'components/atoms/UserMenuOptions',
  component: UserMenuOptions,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof UserMenuOptions>;

const Template: ComponentStory<typeof UserMenuOptions> = args => <UserMenuOptions {...args} />;

export const Default = Template.bind({});
Default.args = {
  headerText: 'User Menu Heading',
  children: (
    <>
      <UserMenuItem icon="help_center_icon" text="Help Center" />
    </>
  )
};
