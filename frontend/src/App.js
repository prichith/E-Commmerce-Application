import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';
import ProductsPage from './components/productsPage/ProductsPage';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/product' element={<ProductsPage />} />
    </Routes>
  );
}

