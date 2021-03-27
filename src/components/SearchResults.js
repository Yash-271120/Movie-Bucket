import React from 'react';
import { Image, ProgressBar, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faTv } from '@fortawesome/free-solid-svg-icons';

const SearchResults = ({ searchData }) => {
  return (
    <>
      {searchData.map((item) => {
        return (
          <div
            className='mb-5 mt-5 ml-5'
            id={item.id}
            style={{
              width: '85%',
              margin: 'auto',
              padding: '30px',
              border: '1px solid black',
              height: '400px',
              backgroundColor: '#001a33',
              display: 'flex',
              position: 'relative',
              overflow: 'auto',
            }}
          >
            <span
              style={{
                display: 'block',
                width: '40px',
                height: '30px',
                position: 'absolute',
                fontSize: '40px',
                top: '0',
                right: '22px',
              }}
            >
              {item.media_type === 'movie' ? (
                <Badge variant='info'>
                  <FontAwesomeIcon icon={faFilm} />
                </Badge>
              ) : (
                <Badge variant='info'>
                  <FontAwesomeIcon icon={faTv} />
                </Badge>
              )}
            </span>
            <div
              style={{
                width: '20%',
                height: '300px',
                opacity: '1',
                minWidth: '250px',
                color: 'white',
              }}
            >
              <Image
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                rounded
                width='100%'
                height={300}
                alt='Whoops! the poster is missing'
              />
            </div>
            <div
              style={{
                color: 'white',
                width: '100%',
                textAlign: 'center',
                marginLeft: '20px',
              }}
            >
              <h4 style={{ color: '#ff5050' }}>
                {item.original_title ? item.original_title : item.original_name}
              </h4>
              <span>{item.overview}</span>
              <div
                style={{
                  color: '#66b3ff',
                  textAlign: 'left',
                  marginTop: '15px',
                  width: '200px',
                }}
              >
                <h5>Ratings</h5>
                <p>
                  {item.vote_average}{' '}
                  <ProgressBar
                    striped
                    variant='success'
                    now={item.vote_average * 10}
                  />{' '}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SearchResults;
