/* eslint-disable import/no-anonymous-default-export */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BlockFive, BlockFiveProps, blockFiveMock } from '.';

export default {
  title: 'Block/Five',
  component: BlockFive
} as ComponentMeta<typeof BlockFive>;

const Template: ComponentStory<typeof BlockFive> = (args: BlockFiveProps) => (
  <BlockFive {...args} />
);

export const Default = Template.bind({});
Default.args = blockFiveMock;
