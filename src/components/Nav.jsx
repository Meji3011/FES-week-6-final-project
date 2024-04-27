import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/Nav.css";

function Nav() {
  return (
    <>
      <section id="nav-bar">
        <nav>
          <div className="row">
            <div className="nav__container">
              <Link to="/" className="nav--logo__container">
                <div className="nav--logo">
                  <FontAwesomeIcon icon="dragon" />
                </div>
                <div className="nav--title">Dragon Anime</div>
              </Link>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Nav;
