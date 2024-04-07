import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section id="nav-bar">
        <nav>
          <div className="row">
            <div className="nav__container">
              <Link to="/" className="nav-logo__container">
                <div className="nav-logo">
                  <FontAwesomeIcon icon="dragon" />
                </div>
                <div className="nav-title">Dragon Anime</div>
              </Link>
              <ul className="nav__link--list">
                <li className="nav__link">
                  <button id="topAnimeBtn">Top Anime</button>
                </li>
                <li className="nav__link">
                  <button id="currentSeasonBtn">Current Season Anime</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Home;
