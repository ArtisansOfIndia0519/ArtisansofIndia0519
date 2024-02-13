// categories.js
import React from "react";
import "./categories.css";

import image from "../Assets/Images/banner1.svg";

const categoriesData = [
  { id: 1, name: "Category 1", image: image },
  { id: 2, name: "Category 2", image: image },
  { id: 3, name: "Category 3", image: image },
  { id: 4, name: "Category 4", image: image },
  { id: 5, name: "Category 5", image: image },
  { id: 6, name: "Category 6", image: image },
];

const productsData = [
  { id: 1, name: "Product 1", image: image },
  { id: 2, name: "Product 2", image: image },
  { id: 3, name: "Product 3", image: image },
  { id: 4, name: "Product 4", image: image },
  { id: 5, name: "Product 5", image: image },
  { id: 6, name: "Product 6", image: image },
];

const Category = () => {
  return (
    <div>
      <div className="categories-container">
        {categoriesData.map((category) => (
          <div key={category.id} className="category-item">
            <div className="category-circle">
              <img
                src={category.image}
                alt={category.name}
                className="category-image"
              />
            </div>
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </div>
      <div className="trending-products">
        <div className="section-title">Trending Products</div>
        <div className="products-container">
          {productsData.map((product) => (
            <div key={product.id} className="product-item">
              <div className="product-box">
                <img src={product.image} alt={product.name} className="" />
              </div>
              <p className="product-name">{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
