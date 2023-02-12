import { LinkObj } from '@/types';

export const transformLink = (raw?: any): LinkObj | undefined => {
  if (raw) {
    return {
      id: raw.id || '',
      title: raw.title || '',
      url: raw.url || '',
      target: ''
    };
  }
};
