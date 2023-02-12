export type LinkObj = {
  id?: string;
  title: string;
  url: string;
  target?: TargetType;
};

export type Format = 'thumbnail';

export type ImageFormat = Record<
  Format,
  {
    ext: string;
    url: string;
    mime: string;
    name: string;
    width: number;
    height: number;
  }
>;

export type ImageObj = {
  formats?: ImageFormat | null;
  url: string;
  alternativeText?: string | null;
  mime?: string | null;
  width?: number | null;
  height?: number | null;
};

export type SocialType = {
  id: string;
  socialType: 'twitter' | 'linkIn' | 'facebook' | 'git' | 'peaceHand';
  link: LinkObj;
};

export type TargetType = '_blank' | '_self' | '_parent' | '_top';
