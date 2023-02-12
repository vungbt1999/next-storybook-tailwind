/* eslint-disable import/no-anonymous-default-export */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Footer, FooterProps, footerMockData } from '.';

export default {
  title: 'Layout/Footer',
  component: Footer
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args: FooterProps) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = footerMockData;
