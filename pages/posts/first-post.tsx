import React, { FunctionComponent } from 'react';
import Link from 'next/link';

const FirstPost: FunctionComponent = () => {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
};

export default FirstPost;
