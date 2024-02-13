import "../Header/header.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FaSearch, FaRegHeart, FaShoppingBag, FaRegUser } from "react-icons/fa";

import logo from "../Assets/Images/Logo.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="nav-container">
          <div className="nav-bar">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <div className="navigation-buttons">
              <Link to="/">
                <button className="btn">Home</button>
              </Link>
              <Link>
                <button className="btn">Categories</button>
              </Link>
              <Link>
                <button className="btn">About Us</button>
              </Link>
              <Link>
                <button className="btn">Contact Us</button>
              </Link>
            </div>
            <div className="icons">
              <div className="ic">
                <FaSearch />
              </div>
              <div className="ic">
                <FaRegUser />
              </div>
              <div className="ic">
                <FaRegHeart />
              </div>
              <div className="ic">
                <FaShoppingBag />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
