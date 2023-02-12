import { RenderIcon } from '@/components/common';
import { SocialType } from '@/types';
import Link from 'next/link';
import React from 'react';

export function FooterSocial({ items, copyright }: { items: SocialType[]; copyright: string }) {
  return (
    <div className="border-t border-solid border-gray-200 pt-32 flex pb-48">
      <div
        dangerouslySetInnerHTML={{ __html: copyright }}
        className="text-md-regular text-gray-500 font-primary flex-1 mr-32"
      />
      <ul className="flex">
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
