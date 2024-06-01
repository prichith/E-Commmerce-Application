import React from 'react';
import Header from './components/header/Header';
import AdminPage from './components/adminPanel/AdminPage';
import Footer from './components/footer/Footer';
import ProductForm from './components/adminPanel/ProductForm';
import { useState } from 'react';

export default function AdminPanel(){
  const [data, setData] = useState({});
  return (
    <>
    <Header />
    <AdminPage data={data} updateData={setData} />
    <ProductForm data={data} updateData={setData}  />
    <Footer />
    </>
)
}
