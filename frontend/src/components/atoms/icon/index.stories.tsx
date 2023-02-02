/* eslint-disable react/react-in-jsx-scope */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from './';

export default {
  title: 'components/atoms/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const Help = Template.bind({});
Help.args = {
  iconName: 'help',
};

export const PullDown = Template.bind({});
PullDown.args = {
  iconName: 'pulldown',
};

export const ArrowTop = Template.bind({});
ArrowTop.args = {
  iconName: 'arrow-top',
};

export const ArrowUnion = Template.bind({});
ArrowUnion.args = {
  iconName: 'arrow-union',
};

export const BlueCard = Template.bind({});
BlueCard.args = {
  iconName: 'blue-card',
};

export const BlueFlag = Template.bind({});
BlueFlag.args = {
  iconName: 'blue-flag',
};

export const Phone = Template.bind({});
Phone.args = {
  iconName: 'phone',
};

export const MapPin = Template.bind({});
MapPin.args = {
  iconName: 'map-pin',
};

export const Globe = Template.bind({});
Globe.args = {
  iconName: 'globe',
};

export const Info = Template.bind({});
Info.args = {
  iconName: 'info',
};

export const Search = Template.bind({});
Search.args = {
  iconName: 'search',
};

export const Pdf = Template.bind({});
Pdf.args = {
  iconName: 'pdf',
};

export const PdfBlue = Template.bind({});
PdfBlue.args = {
  iconName: 'pdf-blue',
};

export const Delete = Template.bind({});
Delete.args = {
  iconName: 'delete',
};

export const Edit = Template.bind({});
Edit.args = {
  iconName: 'edit',
};
