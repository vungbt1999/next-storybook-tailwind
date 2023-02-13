/* eslint-disable import/no-anonymous-default-export */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BlockOne, BlockOneProps, blockOneMock } from '.';

export default {
  title: 'Block/One',
  component: BlockOne
} as ComponentMeta<typeof BlockOne>;

const Template: ComponentStory<typeof BlockOne> = (args: BlockOneProps) => <BlockOne {...args} />;

export const Default = Template.bind({});
Default.args = blockOneMock;
