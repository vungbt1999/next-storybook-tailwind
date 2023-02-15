import { RenderIcon } from '@/components/common';
import { SocialType } from '@/types';
import Link from 'next/link';
import React from 'react';

export function FooterSocial({ items, copyright }: { items: SocialType[]; copyright: string }) {
  return (
    <div className="border-t border-solid border-gray-200 pt-32 flex pb-48 flex-col md:flex-row">
      <div
        dangerouslySetInnerHTML={{ __html: copyright }}
        className="text-md-regular text-gray-500 font-primary flex-1 md:mr-32 text-center md:text-start"
      />
      <ul className="flex w-full md:w-auto justify-center mt-32 md:mt-0">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.link.url}
            target="_blank"
            title={item.link.title}
            className="block mr-24 last:mr-0"
          >
            <RenderIcon name={item.socialType} className="text-gray-400 w-24 h-24" />
          </Link>
        ))}
      </ul>
    </div>
  );
}
