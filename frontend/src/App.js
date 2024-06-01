import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import ProductsPage from './components/productsPage/ProductsPage';
import AdminPanel from './AdminPanel';
import CategoryPage from './CategoryPage';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/categories' element={<CategoryPage />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/product' element={<ProductsPage />} />
      <Route path='/admin' element={<AdminPanel />} />
    </Routes>
  );
}

