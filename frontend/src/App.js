import './App.css';
// import './components/slider/slider.css';
import Header from './components/Header';
import Categories from './components/categories/Categories';
import SlideShow from './components/slider/SlideShow';
import Footer from './components/footer/Footer';
import PopularPosts from './components/popularPosts/PopularPosts';

export default function App() {
  return (
    <>
      <Header />
      <Categories />
      <SlideShow />
      <PopularPosts />
      <Footer />
    </>
  );
}

