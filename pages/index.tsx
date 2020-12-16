import Link from 'next/link';
import { FunctionComponent } from 'react';

const Home: FunctionComponent = () => {
  return (
    <div className="container">
      <h1>Head</h1>
      <h2>
        Read{' '}
        <Link href="/posts/first-post">
          <a>This page!</a>
        </Link>
      </h2>
    </div>
  );
};

export default Home;
