import './App.css';
import react, { useState } from 'react';
import Header from './components/Header';
import Trending from './components/Trending';
import MainContent from './components/MainContent';
import TopRated from './components/TopRated';
import SearchResults from './components/SearchResults';

const App = () => {
  const [searchData, setSearchData] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const onSearchHandler = async (data) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=9461bf2372804cb1cd2bf49bb73f0fe4&language=en-US&query=${data}&page=1`
    );
    const { results } = await res.json();
    setSearchData(results);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setShowSearch(true);
  };

  const homeClickHandler = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setShowSearch(false);
  };

  return (
    <div className='App'>
      <Header
        onSearchHandler={onSearchHandler}
        homeClickHandler={homeClickHandler}
      />
      {showSearch ? <SearchResults searchData={searchData} /> : <MainContent />}
      <Trending />
      <TopRated />
    </div>
  );
};

export default App;
