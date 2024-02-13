// categories.js
import React from "react";
import "./categories.css";

const categoryImages = [
  require("../Assets/Images/banner1.svg").default,
  require("../Assets/Images/banner2.svg").default,
  require("../Assets/Images/banner3.svg").default,
  require("../Assets/Images/banner4.svg").default,
  require("../Assets/Images/banner5.svg").default,
  require("../Assets/Images/banner6.svg").default,
];

const categoryItems = [
  { id: 1, name: "Category 1" },
  { id: 2, name: "Category 2" },
  { id: 3, name: "Category 3" },
  { id: 4, name: "Category 4" },
  { id: 5, name: "Category 5" },
  { id: 6, name: "Category 6" },
];

const productsData = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
  { id: 4, name: "Product 4" },
];

const categories = [
  { name: "Category-1", products: productsData },
  { name: "Category-2", products: productsData },
  { name: "Category-3", products: productsData },
  { name: "Category-4", products: productsData },
  { name: "Category-5", products: productsData },
  { name: "Category-6", products: productsData },
];

const Category = () => {
  return (
    <div className="categories-section">
      <div className="categories-container">
        {categoryItems.map((category, index) => (
          <div key={category.id} className="category-item">
            <div className="category-circle">
              <img
                src={categoryImages[index]}
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
        <div className="categories-box-container">
          {categories.map((category, index) => (
            <div className="category-box" key={index}>
              <div className="cat-title">{category.name}</div>
              <div className="product-container">
                {category.products.map((product, productIndex) => (
                  <img
                    key={productIndex}
                    src={categoryImages[index]}
                    alt={product.name}
                    className="product-image"
                  />
                ))}
              </div>
              <div className="cat-CTA">
                <button>Shop Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
