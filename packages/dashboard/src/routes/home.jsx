import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <a href='/packing' className='mr-2'>
        Packing
      </a>
      <a href='/dashboard'>Dashboard</a>
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
