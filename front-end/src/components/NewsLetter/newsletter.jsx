import React from "react";

import "../NewsLetter/newsletter.css";

const NewsLetter = () => {
  return (
    <>
      <div className="News-letter-container">
        <div className="news-letter-content">
          <div className="news-letter-title">
            <p></p>Subscribe to our news letter
          </div>
          <div className="news-letter-registration">
            <div className="banner-title">
              Get offers and great deals through E-mail
            </div>
            <div className="search">
              <input
                className="search-bar"
                type="search"
                placeholder="Register here to hear our best offers"
              />
              <button className="CTA-button" type="button">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
