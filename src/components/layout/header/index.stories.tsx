/* eslint-disable import/no-anonymous-default-export */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header, HeaderProps, headerMockData } from '.';

export default {
  title: 'Layout/Header',
  component: Header
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args: HeaderProps) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = headerMockData;
