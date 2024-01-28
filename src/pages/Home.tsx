import React from "react";
import Hero from "../components/hero/Hero";
import Featured from "../components/featured/Featured";
import ShopCategory from "../components/category/ShopCategory";
import ShopProduct from "../components/shop/ShopProduct";
import Section from "../components/section/Section";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Featured />
      <ShopCategory />
      <ShopProduct />
      <Section />
      <Footer />
    </>
  );
};

export default Home;
