import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import "../Styles/AnimeResults.css";

const AnimeResults = ({ searchQuery }) => {
  const [animeData, setAnimeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAnime = async (url) => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
  
        if (response.ok) {
          const jsonResponse = await response.json();
          const slicedData = jsonResponse.data.slice(0, 12);
          setAnimeData(slicedData);
          console.log("Anime Data:", slicedData);
        } else {
          console.error("Failed to fetch anime data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };
  
    if (searchQuery) {
      if (searchQuery.startsWith("https://api.jikan.moe/v4/anime?q=")) {
        // If the searchQuery is a search term URL
        fetchAnime(searchQuery);
      } else {
        // If the searchQuery is a direct API URL or a search term
        const url = searchQuery.startsWith("https://")
          ? searchQuery
          : `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(searchQuery)}`;
        fetchAnime(url);
      }
    }
  
    // Cleanup function
    return () => {
      setAnimeData([]);
    };
  }, [searchQuery]);

  return (
    <div>
      {isLoading ? (
        <div className="animeResult__container">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="animeResult__item">
              <Skeleton width={225} height={325} />
              <Skeleton width={200} height={24} style={{ marginTop: "10px" }} />
            </div>
          ))}
        </div>
      ) : animeData.length > 0 ? (
        <div className="animeResult__container">
          {animeData.map((anime, index) => (
            <div key={index} className="animeResult__item">
              <Link to={`/anime/${anime.mal_id}`}>
                <img
                  className="anime--icon"
                  src={anime.images.jpg.image_url}
                  alt={anime.title}
                />
                <span className="anime--title">{anime.title}</span>
              </Link>
            </div>
          ))}
        </div>
      ) : searchQuery ? (
        <p>No results found.</p>
      ) : null}
    </div>
  );
};

export default AnimeResults;
