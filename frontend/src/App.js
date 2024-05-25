import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
    </Routes>
  );
}

