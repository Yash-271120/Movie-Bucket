import React from 'react';
import Carousel from 'react-elastic-carousel';

const TrendingCard = ({ movies }) => {
  return (
    <div className='m-auto w-75'>
      <Carousel
        itemsToShow={5}
        enableAutoPlay
        autoPlaySpeed={3500}
        showArrows={false}
        easing='ease'
      >
        {movies.map((movie) => {
          return (
            <div
              key={movie.id}
              className='m-auto w-100'
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'center center',
                height: '300px',
              }}
            ></div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TrendingCard;
