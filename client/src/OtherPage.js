import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <h2>Im some other page</h2>
      <Link to='/'>Go back home</Link>
    </div>
  );
};
