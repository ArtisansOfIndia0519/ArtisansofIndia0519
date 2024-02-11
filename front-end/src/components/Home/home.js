import "../Home/home.css";

import ImgSlider from "../Home/imgslider";
import Category from "../Categories/categories";

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
      </div>
    </>
  );
};

export default Home;
