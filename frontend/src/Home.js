import React from 'react';
import Header from './components/header/Header';
import Categories from './components/categories/Categories';
import SlideShow from './components/slider/SlideShow';
import Footer from './components/footer/Footer';
import PopularPosts from './components/popularPosts/PopularPosts';

export default function Home() {
  return (
    <>
      <Header />
      <Categories />
      <SlideShow />
      <PopularPosts />
      <Footer />
    </>  
)
};
