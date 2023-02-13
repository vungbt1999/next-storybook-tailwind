/* eslint-disable import/no-anonymous-default-export */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BlockThree, BlockThreeProps, blockThreeMock } from '.';

export default {
  title: 'Block/Three',
  component: BlockThree
} as ComponentMeta<typeof BlockThree>;

const Template: ComponentStory<typeof BlockThree> = (args: BlockThreeProps) => (
  <BlockThree {...args} />
);

export const Default = Template.bind({});
Default.args = blockThreeMock;
