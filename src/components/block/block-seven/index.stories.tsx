/* eslint-disable import/no-anonymous-default-export */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BlockSeven, BlockSevenProps, blockSevenMock } from '.';

export default {
  title: 'Block/Seven',
  component: BlockSeven
} as ComponentMeta<typeof BlockSeven>;

const Template: ComponentStory<typeof BlockSeven> = (args: BlockSevenProps) => (
  <BlockSeven {...args} />
);

export const Default = Template.bind({});
Default.args = blockSevenMock;
