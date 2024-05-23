import './App.css';
import './components/slider/slider.css';
import Header from './components/Header';
import Categories from './components/Categories';
import SlideShow from './components/slider/SlideShow';

export default function App() {
  return (
    <>
      <Header />
      <Categories />
      <SlideShow />
    </>
  );
}

