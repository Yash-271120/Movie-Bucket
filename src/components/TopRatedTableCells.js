import React from 'react';

const TopRatedTableCells = ({ movies, tv }) => {
  if (!tv) {
    return (
      <>
        {movies.map((movie, idx) => {
          return (
            <tr>
              <td>
                {idx + 1}{' '}
                <div
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center center',
                    height: '50px',
                    width: '50px',
                  }}
                ></div>
              </td>
              <td>{movie.original_title}</td>
              <td>{`${movie.vote_average}/10`}</td>
              <td>{movie.release_date}</td>
              <td>{movie.overview}</td>
            </tr>
          );
        })}
      </>
    );
  } else {
    return (
      <>
        {movies.map((movie, idx) => {
          return (
            <tr>
              <td>
                {idx + 1}{' '}
                <div
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center center',
                    height: '50px',
                    width: '50px',
                  }}
                ></div>
              </td>
              <td>{movie.original_name}</td>
              <td>{`${movie.vote_average}/10`}</td>
              <td>{movie.first_air_date}</td>
              <td>{movie.overview}</td>
            </tr>
          );
        })}
      </>
    );
  }
};

export default TopRatedTableCells;
