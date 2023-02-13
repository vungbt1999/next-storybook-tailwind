import {
  BlockFive,
  blockFiveMock,
  BlockFour,
  blockFourMock,
  BlockOne,
  blockOneMock,
  BlockSeven,
  blockSevenMock,
  BlockThree,
  blockThreeMock,
  BlockTwo,
  blockTwoMock
} from '@/components/block';
import { BlockSix, blockSixMock } from '@/components/block/block-six';
import { Fragment } from 'react';

export default function HomePage() {
  return (
    <Fragment>
      <BlockOne {...blockOneMock} />
      <BlockTwo {...blockTwoMock} />
      <BlockThree {...blockThreeMock} className="mt-96" />
      <BlockFour {...blockFourMock} className="mt-96" />
      <BlockFive {...blockFiveMock} />
      <BlockSix {...blockSixMock} />
      <BlockSeven {...blockSevenMock} className="mt-96" />
    </Fragment>
  );
}

HomePage.withPageLayout = true;
