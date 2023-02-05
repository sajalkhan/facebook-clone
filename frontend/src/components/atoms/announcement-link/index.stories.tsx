import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AnnouncementLink } from './';

export default {
  title: 'components/atoms/AnnouncementLink',
  component: AnnouncementLink,
  parameters: {
    layout: 'padded'
  }
} as ComponentMeta<typeof AnnouncementLink>;

const Template: ComponentStory<typeof AnnouncementLink> = args => <AnnouncementLink {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'Announcement link',
  href: '#'
};
