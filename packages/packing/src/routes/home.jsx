import React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from '@naadi/framework';

const Home = () => {
  return (
    <div>
      <Menu />
      <div className='text-center p-5'>
        <h2>Packing</h2>
        <Link to='/' className='mr-3'>
          Public
        </Link>
        <Link to='/private'>Private</Link>
      </div>
    </div>
  );
};

export default Home;
