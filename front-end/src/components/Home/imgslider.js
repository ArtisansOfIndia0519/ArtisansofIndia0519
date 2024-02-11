// Slider.js

import React, { useState, useEffect } from "react";
import "./imgslider.css"; // Import the CSS file

import { FaSearch } from "react-icons/fa";

import image1 from "../Assets/Images/banner1.svg";
import image2 from "../Assets/Images/banner2.svg";
import image3 from "../Assets/Images/banner3.svg";
import image4 from "../Assets/Images/banner4.svg";

const images = [image1, image2, image3, image4];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []); // The empty dependency array ensures that the effect runs only once after the initial render

  return (
    <div className="slider-container">
      <div
        className="slider-background"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="text">
          <span className="s1"> Crafted For You</span>
          <span className="s2">
            Explore thousands of unique items by artisans all over the India
          </span>
        </div>
        <div className="search-bar">
          <FaSearch />
          <input type="text" placeholder="Exploer the world of Art" />
          <button className="btn">Search</button>
          {/* Additional search bar elements go here */}
        </div>
      </div>
    </div>
  );
};

export default Slider;
