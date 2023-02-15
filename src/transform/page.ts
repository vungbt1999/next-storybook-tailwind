import {
  BlockFiveProps,
  BlockFourProps,
  BlockOneProps,
  BlockSevenProps,
  BlockSixProps,
  BlockThreeProps,
  BlockTwoProps
} from '@/components/block';
import {
  BlockOneFragment,
  BlockTwoFragment,
  BlockThreeFragment,
  BlockFourFragment,
  BlockFiveFragment,
  BlockSixFragment,
  BlockSevenFragment,
  GetPageQuery,
  ImageFragment,
  LinkFragment
} from '@/utils/graphql-api/generated';
import { transformImageObj, transformLink, transformSEO } from './common';

export const transformPage = (raw: GetPageQuery) => {
  const page = raw.page?.data;
  if (!page) {
    return null;
  }
  const pageAttributes = page.attributes;
  const pageBlocks = pageAttributes?.blocks || [];

  return {
    name: pageAttributes?.name,
    slug: pageAttributes?.slug,
    blocks: pageBlocks.map((block) => {
      switch (block?.__typename) {
        case 'ComponentBlocksOne':
          return {
            __typename: block.__typename,
            ...toBlockOne(block)
          };
        case 'ComponentBlocksTwo':
          return {
            __typename: block.__typename,
            ...toBlockTwo(block)
          };
        case 'ComponentBlocksThree':
          return {
            __typename: block.__typename,
            ...toBlockThree(block)
          };
        case 'ComponentBlocksFour':
          return {
            __typename: block.__typename,
            ...toBlockFour(block)
          };
        case 'ComponentBlocksFive':
          return {
            __typename: block.__typename,
            ...toBlockFive(block)
          };
        case 'ComponentBlocksSix':
          return {
            __typename: block.__typename,
            ...toBlockSix(block)
          };
        case 'ComponentBlocksSeven':
          return {
            __typename: block.__typename,
            ...toBlockSeven(block)
          };
        default:
          return null;
      }
    }),
    seo: transformSEO(page.attributes?.seo),
    backgroundImage: transformImageObj(pageAttributes?.backgroundImage as ImageFragment)
  };
};

const toBlockOne = (block: BlockOneFragment): BlockOneProps => {
  return {
    id: block.idHashtag || block.id,
    title: block.title,
    summary: block.summary || null,
    ctaButtonLinks: (block.ctaButtonBlockOne || []).map((item) =>
      transformLink(item as LinkFragment)
    ),
    iframeEmbed: block.iframeEmbed
  };
};

const toBlockTwo = (block: BlockTwoFragment): BlockTwoProps => {
  return {
    id: block.idHashtag || block.id,
    title: block.title,
    items: (block.itemsBlockTwo || []).map((item) => ({
      ...transformImageObj(item?.image as ImageFragment)
    }))
  };
};

const toBlockThree = (block: BlockThreeFragment): BlockThreeProps => {
  return {
    id: block.idHashtag || block.id,
    title: block.title,
    summary: block.summary || null,
    items: (block.itemsBlockThree || []).map((item) => ({
      title: item?.title || '',
      summary: item?.title || '',
      ctaButtonLink: transformLink(item?.ctaButtonLink),
      image: transformImageObj(item?.image),
      styleVariant: item?.styleVariant
    }))
  };
};

const toBlockFour = (block: BlockFourFragment): BlockFourProps => {
  return {
    id: block.idHashtag || block.id,
    title: block.title,
    summary: block.summary || null,
    items: (block.items || []).map((item) => ({
      title: item?.title || '',
      icon: item?.icon || ''
    }))
  };
};

const toBlockFive = (block: BlockFiveFragment): BlockFiveProps => {
  return {
    id: block.idHashtag || block.id,
    title: block.title,
    items: (block.items || []).map((item) => ({
      title: item?.title || '',
      summary: item?.summary || '',
      image: transformImageObj(item?.image as ImageFragment),
      ctaButtonLink: transformLink(item?.ctaButtonLink as LinkFragment)
    }))
  };
};

const toBlockSix = (block: BlockSixFragment): BlockSixProps => {
  return {
    id: block.idHashtag || block.id,
    title: block.title,
    summary: block.summary || null,
    ctaButtonLink: transformLink(block.ctaButtonLinkBlockSix as LinkFragment),

    items: (block.items || []).map((item) => ({
      title: item?.title || '',
      summary: item?.summary || null,
      ctaButtonLink: transformLink(item?.ctaButtonLink as LinkFragment),
      image: transformImageObj(item?.image as ImageFragment)
    }))
  };
};

const toBlockSeven = (block: BlockSevenFragment): BlockSevenProps => {
  return {
    id: block.idHashtag || block.id,
    subtitle: block.subtitle || null,
    title: block.title,
    summary: block.summary || null,
    ctaButtonLink: transformLink(block.ctaButtonLink as LinkFragment),
    items: (block.items || []).map((item) => ({
      image: transformImageObj(item?.image as ImageFragment),
      link: transformLink(item?.link as LinkFragment),
      date: new Date(item?.date).toDateString()
    }))
  };
};

export type Blocks = NonNullable<ReturnType<typeof transformPage>>['blocks'];
