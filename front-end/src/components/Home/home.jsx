import "../Home/home.css";

import ImgSlider from "./imgslider";
import Product from "../Products/products";
import NewsLetter from "../NewsLetter/newsletter";
import Stories from "../ArtisansStory/story";

const Home = () => {
  return (
    <>
      <div className="body">
        <div className="banner">
          <ImgSlider />
        </div>
        <div className="products">
          <Product />
        </div>
        <div className="newsletter">
          <NewsLetter />
        </div>
        <div className="stories">
          <Stories />
        </div>
      </div>
    </>
  );
};

export default Home;
