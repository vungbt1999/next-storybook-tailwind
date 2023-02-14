export * from './block-one';
export * from './block-two';
export * from './block-three';
export * from './block-four';
export * from './block-five';
export * from './block-six';
export * from './block-seven';

import { Blocks as BlocksProps } from '@/transform';
import { BlockFive } from './block-five';
import { BlockFour } from './block-four';
import { BlockOne } from './block-one';
import { BlockSeven } from './block-seven';
import { BlockSix } from './block-six';
import { BlockThree } from './block-three';
import { BlockTwo } from './block-two';

type Props = {
  blocks: BlocksProps;
};

export default function Blocks({ blocks }: Props) {
  return (
    <>
      {blocks?.map((block, index) => {
        switch (block?.__typename) {
          case 'ComponentBlocksOne':
            return <BlockOne key={index} {...block} />;
          case 'ComponentBlocksTwo':
            return <BlockTwo key={index} {...block} />;
          case 'ComponentBlocksThree':
            return <BlockThree key={index} {...block} className="mt-96" />;
          case 'ComponentBlocksFour':
            return <BlockFour key={index} {...block} className="mt-96" />;
          case 'ComponentBlocksFive':
            return <BlockFive key={index} {...block} />;
          case 'ComponentBlocksSix':
            return <BlockSix key={index} {...block} />;
          case 'ComponentBlocksSeven':
            return <BlockSeven key={index} {...block} className="mt-96" />;
          default:
            return null;
        }
      })}
    </>
  );
}
