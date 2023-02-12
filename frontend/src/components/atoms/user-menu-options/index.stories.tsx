import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PrivacySettings, HelpSupports, DisplayAccessibility } from '.';

export default {
  title: 'components/molecules/UserMenuOptions',
  component: PrivacySettings,
  parameters: {
    paddings: {
      default: 'small'
    },
    backgrounds: {
      default: 'gray'
    }
  }
} as ComponentMeta<typeof PrivacySettings>;

const Template1: ComponentStory<typeof PrivacySettings> = args => <PrivacySettings {...args} />;
const Template2: ComponentStory<typeof HelpSupports> = args => <HelpSupports {...args} />;
const Template3: ComponentStory<typeof DisplayAccessibility> = args => <DisplayAccessibility {...args} />;

export const SettingsPrivacy = Template1.bind({});
SettingsPrivacy.args = {};

export const HelpSupport = Template2.bind({});
HelpSupport.args = {};

export const DisplayAccess = Template3.bind({});
DisplayAccess.args = {};
