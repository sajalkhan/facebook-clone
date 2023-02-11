import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SearchInput } from './';

export default {
  title: 'components/atoms/SearchInput',
  component: SearchInput,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = args => <SearchInput {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
