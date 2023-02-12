import { CSSProperties, FC } from 'react';
import { Chevron } from './chevron';
import Facebook from './facebook';
import Git from './git';
import LinkIn from './link-in';
import PeaceHand from './peace-hand';
import Twitter from './twitter';

export type IconProps = {
  className?: string;
  style?: CSSProperties;
  transform?: string;
};

export type Icon = FC<IconProps>;

export type IconName = 'chevron' | 'facebook' | 'git' | 'linkIn' | 'peaceHand' | 'twitter';

export type IconsType = Record<IconName, Icon>;

export const Icons: IconsType = {
  chevron: (props: IconProps) => {
    return <Chevron {...props} />;
  },
  facebook: (props: IconProps) => {
    return <Facebook {...props} />;
  },
  git: (props: IconProps) => {
    return <Git {...props} />;
  },
  linkIn: (props: IconProps) => {
    return <LinkIn {...props} />;
  },
  peaceHand: (props: IconProps) => {
    return <PeaceHand {...props} />;
  },
  twitter: (props: IconProps) => {
    return <Twitter {...props} />;
  }
};

export const RenderIcon = ({ name, ...reset }: IconProps & { name?: IconName }) => {
  if (!name) {
    return null;
  }
  const Icon = Icons[name];
  return <Icon {...reset} />;
};
