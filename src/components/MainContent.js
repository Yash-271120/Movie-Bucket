import React from 'react';
import background from '../images/background.jpg';

const MainContent = () => {
  return (
    <div
      className='w-100'
      style={{
        height: '644px',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <h2>Welcome To Movie Bucket</h2>
    </div>
  );
};

export default MainContent;
