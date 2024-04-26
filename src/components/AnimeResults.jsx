import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AnimeResults = ({ searchQuery }) => {
  const [animeData, setAnimeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAndDisplayAnime = async (url) => {
      setIsLoading(true);
      try {
        const response = await fetch(url);

        if (response.ok) {
          const jsonResponse = await response.json();
          setAnimeData(jsonResponse.data.slice(0, 12));
        } else {
          console.error("Failed to fetch anime data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIsLoading(false);
    };

    if (searchQuery) {
      if (searchQuery.startsWith("https://")) {
        // If the searchQuery is a direct API URL
        fetchAndDisplayAnime(searchQuery);
      } else {
        // If the searchQuery is a search term
        const url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(
          searchQuery
        )}&limit=12`;
        fetchAndDisplayAnime(url);
      }
    } else {
      setAnimeData([]);
    }
  }, [searchQuery]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : animeData.length > 0 ? (
        <ul>
          {animeData.map((anime) => (
            <li key={anime.mal_id}>
              <Link to={`/anime/${anime.mal_id}`}>
                <img src={anime.images.jpg.image_url} alt={anime.title} />
                <span>{anime.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : searchQuery ? (
        <p>No results found.</p>
      ) : null}
    </div>
  );
};

export default AnimeResults;