import React, { FunctionComponent } from 'react';
import { useRouter } from 'next/router';

const Post: FunctionComponent = () => {
  const router = useRouter();
  const { num, id } = router.query;

  return <p>{num + ' ' + id}</p>;
};

export default Post;
