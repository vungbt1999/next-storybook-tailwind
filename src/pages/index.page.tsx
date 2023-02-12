import { Button } from '@/components/common';
import { Fragment } from 'react';

export default function HomePage() {
  return (
    <Fragment>
      <p className="text-primary-700">Hello</p>
      <Button>Default Button</Button>
      <Button color="danger">Default Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="outline" color="danger">
        Outline Button
      </Button>
    </Fragment>
  );
}

HomePage.withPageLayout = true;
