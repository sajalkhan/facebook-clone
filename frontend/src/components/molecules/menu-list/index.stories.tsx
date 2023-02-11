import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MenuList } from '.';

export default {
  title: 'components/molecules/MenuList',
  component: MenuList,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof MenuList>;

const Template: ComponentStory<typeof MenuList> = args => <MenuList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
