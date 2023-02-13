/* eslint-disable import/no-anonymous-default-export */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BlockTwo, BlockTwoProps, blockTwoMock } from '.';

export default {
  title: 'Block/Two',
  component: BlockTwo
} as ComponentMeta<typeof BlockTwo>;

const Template: ComponentStory<typeof BlockTwo> = (args: BlockTwoProps) => <BlockTwo {...args} />;

export const Default = Template.bind({});
Default.args = blockTwoMock;
