import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../Styles/AnimeInfo.css";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

const AnimeInfo = () => {
  const { id } = useParams();
  const [animeInfo, setAnimeInfo] = useState(null);

  useEffect(() => {
    const fetchAnimeInfo = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));

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

  return (
    <div>
      <Nav />
      {!animeInfo ? (
        <div className="animeInfo__container">
          <Skeleton
            height={37}
            width={300}
            baseColor="#E0E0E0"
            highlightColor="#F5F5F5"
          />
          <Skeleton
            height={600}
            width={425}
            baseColor="#E0E0E0"
            highlightColor="#F5F5F5"
          />
          <div className="animeInfo__details">
            <Skeleton
              height={200}
              baseColor="#E0E0E0"
              highlightColor="#F5F5F5"
            />
            <Skeleton
              height={20}
              width={200}
              baseColor="#E0E0E0"
              highlightColor="#F5F5F5"
            />
            <Skeleton
              height={20}
              width={240}
              baseColor="#E0E0E0"
              highlightColor="#F5F5F5"
            />
            <Skeleton
              height={20}
              width={360}
              baseColor="#E0E0E0"
              highlightColor="#F5F5F5"
            />
          </div>
        </div>
      ) : (
        <div className="animeInfo__container">
          <h2 className="animeInfo__title">{animeInfo.title}</h2>
          <div className="animeInfo__image__container">
            <img
              className="animeInfo__image"
              src={animeInfo.images.jpg.large_image_url}
              alt={animeInfo.title}
            />
          </div>
          <div className="animeInfo__details">
            <p>
              <span className="span__bold">Synopsis:</span> {animeInfo.synopsis}
            </p>
            <p>
              <span className="span__bold">Episodes:</span> {animeInfo.episodes}
            </p>
            <p>
              <span className="span__bold">Status: </span>
              {animeInfo.status}
            </p>
            <p className="para__last">
              <span className="span__bold">Aired: </span>
              {animeInfo.aired.string}
            </p>
            {/* Add more anime information as needed */}
          </div>
        </div>
      )}
      <div className="animeInfo__link__container">
        <Link to="/" className="animeInfo__Link--Home">
          <button>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default AnimeInfo;
