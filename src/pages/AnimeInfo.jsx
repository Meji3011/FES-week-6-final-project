import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";

const AnimeInfo = () => {
  const { id } = useParams();
  const [animeInfo, setAnimeInfo] = useState(null);

  useEffect(() => {
    const fetchAnimeInfo = async () => {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);

        if (response.ok) {
          const jsonResponse = await response.json();
          setAnimeInfo(jsonResponse.data);
        } else {
          console.error("Failed to fetch anime info:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAnimeInfo();
  }, [id]);

  if (!animeInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Nav />
      <h2>{animeInfo.title}</h2>
      <img src={animeInfo.images.jpg.image_url} alt={animeInfo.title} />
      <p>Synopsis: {animeInfo.synopsis}</p>
      <p>Episodes: {animeInfo.episodes}</p>
      <p>Status: {animeInfo.status}</p>
      <p>Aired: {animeInfo.aired.string}</p>
      {/* Add more anime information as needed */}
    </div>
  );
};

export default AnimeInfo;