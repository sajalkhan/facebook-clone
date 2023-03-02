import { MemoryRouter } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ResetHeader } from './';

export default {
  title: 'components/atoms/ResetHeader',
  component: ResetHeader,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof ResetHeader>;

const Template: ComponentStory<typeof ResetHeader> = args => (
  <MemoryRouter>
    <ResetHeader {...args} />
  </MemoryRouter>
);

const defaultImg = process.env.REACT_APP_DEFAULT_IMAGE;
export const Normal = Template.bind({});
Normal.args = {};

export const HasUser = Template.bind({});
HasUser.args = {
  userImg: defaultImg
};
