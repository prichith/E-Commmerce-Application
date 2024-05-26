import React from 'react';
import Header from './components/header/Header';
import PopularPosts from './components/popularPosts/PopularPosts';
import Footer from './components/footer/Footer';
import Categories from './components/categories/Categories';

export default function Products(){
  return (
    <>
    <Header />
    <Categories />
    <PopularPosts />
    <Footer />
    </>
)
}
