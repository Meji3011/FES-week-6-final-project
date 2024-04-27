import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import AnimeResults from "../components/AnimeResults";
import Nav from "../components/Nav";
import "../Styles/Home.css";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch top anime when the component mounts
    setSearchQuery("https://api.jikan.moe/v4/top/anime");
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleTopAnimeClick = () => {
    setSearchQuery("https://api.jikan.moe/v4/top/anime");
  };

  const handleCurrentSeasonClick = () => {
    setSearchQuery("https://api.jikan.moe/v4/seasons/now");
  };

  return (
    <div>
      <Nav />
      <div className="Home__container">
        <div className="Home--buttons__container">
          <button className="button--primary" onClick={handleTopAnimeClick}>
            Top Anime
          </button>
          <button
            className="button--primary"
            onClick={handleCurrentSeasonClick}
          >
            Current Season
          </button>
        </div>
        <SearchBar onSearch={handleSearch} />
      </div>
      <AnimeResults searchQuery={searchQuery} />
    </div>
  );
};

export default Home;
