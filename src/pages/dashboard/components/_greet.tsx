import React from 'react';

const Greet = () => {
  const username = 'Kalyan';
  return (
    <div className='grid text-primary-dark'>
      <h3 className='text-lg md:text-2xl font-bold text-[rgba(32,32,84,0.62)]'>
        Hello {username},
      </h3>
      <h2 className='hidden sm:inline sm:text-3xl md:text-4xl font-bold'>Check out Live Campaigns</h2>
    </div>
  );
};

export default Greet;
