import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import AnimeResults from '../components/AnimeResults';
import Nav from '../components/Nav';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleTopAnimeClick = () => {
    setSearchQuery('https://api.jikan.moe/v4/top/anime');
  };

  const handleCurrentSeasonClick = () => {
    setSearchQuery('https://api.jikan.moe/v4/seasons/now');
  };

  return (
    <div>
      <Nav />
      <button onClick={handleTopAnimeClick}>Top Anime</button>
      <button onClick={handleCurrentSeasonClick}>Current Season</button>
      <SearchBar onSearch={handleSearch} />
      <AnimeResults searchQuery={searchQuery} />
    </div>
  );
};

export default Home;
