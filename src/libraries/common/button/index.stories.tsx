/* eslint-disable import/no-anonymous-default-export */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonProps } from '.';

export default {
  title: 'Common/Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Get in touch' };

export const Outline = Template.bind({});
Outline.args = { children: 'Get in touch', variant: 'outline' };
