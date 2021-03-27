import React, { useState, useEffect } from 'react';
import TopRatedTableCells from './TopRatedTableCells';
import { Nav, Table } from 'react-bootstrap';

const TopRated = () => {
  const [show, setShow] = useState('Movies');
  const [topMovies, setTopMovies] = useState([]);
  const [topShows, setTopShows] = useState([]);

  useEffect(() => {
    // fetch trending movies
    const getMovies = async () => {
      const res = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=9461bf2372804cb1cd2bf49bb73f0fe4&language=en-US&page=1'
      );
      const data = await res.json();
      setTopMovies(data.results);
    };

    //fetch trending tv Shows
    const getShows = async () => {
      const res = await fetch(
        'https://api.themoviedb.org/3/tv/top_rated?api_key=9461bf2372804cb1cd2bf49bb73f0fe4&language=en-US&page=1'
      );
      const data = await res.json();
      setTopShows(data.results);
    };
    getMovies();
    getShows();
  }, []);

  const styles = {
    color: 'black',
    backgroundColor: 'lightblue',
    borderRadius: '7px',
  };
  return (
    <div>
      <h4 className='text-left p-3'>Top Rated</h4>
      <Nav activeKey='/home' onSelect={(selectedKey) => setShow(selectedKey)}>
        <Nav.Item>
          <Nav.Link eventKey='Movies' style={show === 'Movies' ? styles : null}>
            Movies
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='Tv' style={show === 'Tv' ? styles : null}>
            Tv Shows
          </Nav.Link>
        </Nav.Item>
      </Nav>
      {show === 'Movies' ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Rating</th>
              <th>Release Date</th>
              <th>Overview</th>
            </tr>
          </thead>
          <tbody>
            <TopRatedTableCells movies={topMovies} />
          </tbody>
        </Table>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Rating</th>
              <th>Release Date</th>
              <th>Overview</th>
            </tr>
          </thead>
          <tbody>
            <TopRatedTableCells movies={topShows} tv={true} />
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default TopRated;
