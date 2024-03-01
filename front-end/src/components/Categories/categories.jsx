import React, { useState, useEffect } from "react";
import "./categories.css";
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

import category1Image from "../Assets/Images/banner1.svg";
import category2Image from "../Assets/Images/banner2.svg";
import category3Image from "../Assets/Images/banner3.svg";
import category4Image from "../Assets/Images/banner4.svg";
import category5Image from "../Assets/Images/banner5.svg";
import category6Image from "../Assets/Images/banner6.svg";

import image1 from "../Assets/Images/banner1.svg";

const categories = [
  {
    id: 1,
    title: "Category 1 text",
    background: category1Image,
    link: "/category1",
    category: "potery",
  },
  {
    id: 2,
    title: "Category 2 text",
    background: category2Image,
    link: "/category2",
    category: "cat2",
  },
  {
    id: 3,
    title: "Category 3 text",
    background: category3Image,
    link: "/category3",
    category: "cat3",
  },
  {
    id: 4,
    title: "Category 4 text",
    background: category4Image,
    link: "/category4",
    category: "po",
  },
  {
    id: 5,
    title: "Category 5 text",
    background: category5Image,
    link: "/category5",
    category: "pote",
  },
  {
    id: 6,
    title: "Category 6 text",
    background: category6Image,
    link: "/category6",
    category: "ery",
  },
];

const Products = [
  {
    id: 1,
    img: image1,
    ProdName: "name1",
    ProductDiscription: "bqiweffhiwh nebuhqhvdn",
    rating: 3,
  },
  {
    id: 2,
    img: image1,
    ProdName: "name2",
    ProductDiscription: "bqiweffhiwh nebuhqhvdn",
    rating: 3,
  },
  {
    id: 3,
    img: image1,
    ProdName: "name3",
    ProductDiscription: "bqiweffhiwh nebuhqhvdn",
    rating: 3,
  },
  {
    id: 4,
    img: image1,
    ProdName: "name4",
    ProductDiscription: "bqiweffhiwh nebuhqhvdn",
    rating: 3,
  },
  {
    id: 5,
    img: image1,
    ProdName: "name5",
    ProductDiscription: "bqiweffhiwh nebuhqhvdn",
    rating: 5,
  },
  {
    id: 6,
    img: image1,
    ProdName: "name6",
    ProductDiscription: "bqiweffhiwh nebuhqhvdn",
    rating: 3,
  },
  {
    id: 7,
    img: image1,
    ProdName: "name7",
    ProductDiscription: "bqiweffhiwh nebuhqhvdn",
    rating: 3,
  },
  {
    id: 8,
    img: image1,
    ProdName: "name8",
    ProductDiscription: "bqiweffhiwh nebuhqhvdn",
    rating: 3,
  },
  {
    id: 9,
    img: image1,
    ProdName: "name9",
    ProductDiscription: "bqiweffhiwh nebuhqhvdn",
    rating: 3,
  },
  {
    id: 10,
    img: image1,
    ProdName: "name10",
    ProductDiscription: "bqiweffhiwh nebuhqhvdn",
    rating: 3,
  },
  {
    id: 11,
    img: image1,
    ProdName: "name11",
    ProductDiscription: "bqiweffhiwh nebuhqhvdn",
    rating: 3,
  },
];

const Banner = () => {
  const [currentCategory, setCurrentCategory] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCategory(
        (prevCategory) => (prevCategory + 1) % categories.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const addToCart = (product) => {
    console.log(`Added ${product.ProdName} to the cart`);
  };

  return (
    <div className="page-container">
      <div
        className="cat-slider"
        style={{
          backgroundImage: `url(${categories[currentCategory].background})`,
        }}
      >
        <div className="content">
          <span>{categories[currentCategory].title}</span>
          <a href={categories[currentCategory].link} className="button">
            Shop For {categories[currentCategory].category}
          </a>
        </div>
      </div>
      <div className="featured-categories">
        <div className="products-container-cat-page">
          {Products.map((product) => (
            <div className="prod" key={product.id}>
              <div className="prod-img-container">
                <img
                  className="prod-img"
                  src={product.img}
                  alt={product.ProdName}
                />
              </div>
              <span className="product-name">{product.ProdName}</span>
              <span className="prod-discription">
                {product.ProductDiscription}
              </span>

              <div className="rating-container">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar
                    key={index}
                    className={index < product.rating ? "star-filled" : ""}
                  />
                ))}
              </div>
              <button
                className="cart-button"
                onClick={() => addToCart(product)}
              >
                <FaCartPlus />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
