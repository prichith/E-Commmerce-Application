import React from 'react';
import Header from './components/header/Header';
import AdminPage from './components/adminPanel/AdminPage';
import Footer from './components/footer/Footer';
import ProductForm from './components/adminPanel/ProductForm';

export default function AdminPanel(){
  return (
    <>
    <Header />
    <AdminPage />
    <ProductForm />
    <Footer />
    </>
)
}
