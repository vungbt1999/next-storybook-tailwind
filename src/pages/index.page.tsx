import { Button } from '@/libraries/common';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <p className="text-primary-700">Hello</p>
      <Button>Default Button</Button>
      <Button variant="outline">Outline Button</Button>
    </Fragment>
  );
}
