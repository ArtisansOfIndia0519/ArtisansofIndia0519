import "../Home/home.css";

import ImgSlider from "./imgslider";
import Category from "../Categories/categories";
import NewsLetter from "../NewsLetter/newsletter";

const Home = () => {
  return (
    <>
      <div className="body">
        <div className="banner">
          <ImgSlider />
        </div>
        <div className="categories">
          <Category />
        </div>
        <div className="newsletter">
          <NewsLetter />
        </div>
      </div>
    </>
  );
};

export default Home;
