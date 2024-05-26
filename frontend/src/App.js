import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
  );
}

