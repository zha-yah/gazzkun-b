import React from 'react'
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Featured from '../components/Homepage/Featured/Featured';
import Arrivals from '../components/Homepage/Arrivals/Arrivals';
import Category from '../components/Homepage/Categories/Category';
import CategoryExt from '../components/Homepage/CategoriesExt/categoryExt';

const Homepage = () => {
  return (
    <>
      <Navbar/>
      <Featured/>
      <Arrivals/>
      <Category/>
      <CategoryExt/>
      <Footer/>
    </>
  );
};

export default Homepage;