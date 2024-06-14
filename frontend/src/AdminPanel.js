import React from 'react';
import Header from './components/header/Header';
import AdminPage from './components/adminPanel/AdminPage';
import Footer from './components/footer/Footer';
import ProductForm from './components/adminPanel/ProductForm';
import { useState } from 'react';
import AddCategoryForm from './components/adminPanel/AddCategoryForm';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function AdminPanel(){
  const [images, setImages] = useState([]); 
  const [data, setData] = useState({
    name: '',
    brand: '',
    quantity: "",
    price: '',
    category:'',
    // categoryID:'',
    description: '',
    weight: '',
    color: ''
  });
  
  return (
    <>
    <Header />
    <AdminPage data={data} updateData={setData} updateImages={setImages} />
    <ProductForm data={data} updateData={setData} images={images} updateImages={setImages} />
    <AddCategoryForm />
    <Footer />
    </>
)
}
