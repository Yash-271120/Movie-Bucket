import React, { useState, useEffect } from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';
import TrendingCard from './TrendingCard';

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingShows, setTrendingShows] = useState([]);

  useEffect(() => {
    // fetch trending movies
    const getMovies = async () => {
      const res = await fetch(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=9461bf2372804cb1cd2bf49bb73f0fe4'
      );
      const data = await res.json();
      setTrendingMovies(data.results);
    };

    //fetch trending tv Shows
    const getShows = async () => {
      const res = await fetch(
        'https://api.themoviedb.org/3/trending/tv/day?api_key=9461bf2372804cb1cd2bf49bb73f0fe4'
      );
      const data = await res.json();
      setTrendingShows(data.results);
    };
    getMovies();
    getShows();
  }, []);

  return (
    <>
      <h4 className='text-left p-3'>Trending Today</h4>
      <Accordion defaultActiveKey='1' className='pb-3'>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant='secondary' eventKey='0'>
              Movies
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='0'>
            <TrendingCard movies={trendingMovies} />
          </Accordion.Collapse>
        </Card>

        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant='secondary' eventKey='1'>
              TV Shows
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='1'>
            <TrendingCard movies={trendingShows} />
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
};

export default Trending;
