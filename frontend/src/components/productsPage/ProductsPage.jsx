import React from 'react';
import Header from '../header/Header';
import GalleryDetail from '../../GalleryDetail';
import fakeDataItems from '../../indexx';
import Categories from '../categories/Categories';
import Footer from '../footer/Footer';

export default function ProductsPage(){
  return (
    <>
    <Header />
    <Categories />
    <GalleryDetail galleries={fakeDataItems()} thumbsPerView={3} />
    <Footer />
    </>
)
}
