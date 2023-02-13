/* eslint-disable import/no-anonymous-default-export */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BlockFour, BlockFourProps, blockFourMock } from '.';

export default {
  title: 'Block/Four',
  component: BlockFour
} as ComponentMeta<typeof BlockFour>;

const Template: ComponentStory<typeof BlockFour> = (args: BlockFourProps) => (
  <BlockFour {...args} />
);

export const Default = Template.bind({});
Default.args = blockFourMock;
