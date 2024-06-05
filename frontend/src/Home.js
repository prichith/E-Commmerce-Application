import React from 'react';
import Header from './components/header/Header';
import Categories from './components/categories/Categories';
import SlideShow from './components/slider/SlideShow';
import Footer from './components/footer/Footer';
import PopularPosts from './components/popularPosts/PopularPosts';
import { useDispatch } from 'react-redux';
import { fetchGroupProducts } from './redux/products';

export default function Home() {
  const dispatch = useDispatch();
  dispatch(fetchGroupProducts('Mobile'));

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
