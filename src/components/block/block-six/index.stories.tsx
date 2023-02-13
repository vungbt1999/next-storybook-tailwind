/* eslint-disable import/no-anonymous-default-export */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BlockSix, BlockSixProps, blockSixMock } from '.';

export default {
  title: 'Block/Six',
  component: BlockSix
} as ComponentMeta<typeof BlockSix>;

const Template: ComponentStory<typeof BlockSix> = (args: BlockSixProps) => <BlockSix {...args} />;

export const Default = Template.bind({});
Default.args = blockSixMock;
