import React from "react";

import "../Footer/footer.css";

import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="col">
          <div className="col-title">Contact Details</div>
          <div className="col-content">
            <span>
              <FaLocationDot />
              Address : C-801, Adarsh Nagar, Phagwara, 144401{" "}
            </span>
            <span>
              <IoCall />
              Mobile : +91-9341443149
            </span>
            <span>
              <IoMail />
              Email : artisansofindia0519@gmail.com{" "}
            </span>
          </div>
        </div>
        <div className="col">
          <div className="col-title">Important Pages</div>
          <div className="col-content">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="col">
          <div className="col-title">Help</div>
          <div className="col-content">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="col">
          <div className="col-title">Download Our App</div>
          <div className="col-content">
            <span className="play-app-store">
              {" "}
              <FaGooglePlay />
              Play Store
            </span>
            <span className="play-app-store">
              {" "}
              <FaApple />
              App Store
            </span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
