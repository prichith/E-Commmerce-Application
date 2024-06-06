import React from 'react';
import Header from '../header/Header';
import GalleryDetail from '../../GalleryDetail';
import FakeDataItems from '../../indexx';
import Categories from '../categories/Categories';
import Footer from '../footer/Footer';
import { useLocation } from 'react-router-dom';

export default function ProductsPage(){
  const location = useLocation();
  const { product } = location.state || {};
  
  return (
    <>
    <Header />
    <Categories />
    <GalleryDetail galleries={FakeDataItems()} data={product} thumbsPerView={3} />
    {/* <GalleryDetail galleries={FakeDataItems()} thumbsPerView={3} /> */}
    <Footer />
    </>
)
}
