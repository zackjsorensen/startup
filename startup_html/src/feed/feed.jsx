import React from 'react';
import { Quote } from './Quote';
import { Image } from './Image';
import { Table } from './Table';

export function Feed() {
  return (
    <main id="feedmain">
      <Quote/>
      <Image/>
      <Table/>
    </main>
  );
}