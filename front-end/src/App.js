import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/home";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Categories from "./components/Categories/categories";
import AboutUs from "./components/AboutUs/aboutus";
import ContactUs from "./components/ContactUs/contactus";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
