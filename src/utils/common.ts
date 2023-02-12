import { LinkObj, SocialType } from '@/types';

export const linkObjMock: LinkObj = {
  id: 'id',
  title: 'title',
  url: '/',
  target: '_blank'
};

export const socialTypeMock: SocialType = {
  id: 'id',
  socialType: 'facebook',
  link: linkObjMock
};
