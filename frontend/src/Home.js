import React from 'react';
import Header from './components/header/Header';
import Categories from './components/categories/Categories';
import SlideShow from './components/slider/SlideShow';
import Footer from './components/footer/Footer';
import PopularPosts from './components/popularPosts/PopularPosts';
import { useDispatch ,useSelector} from 'react-redux';
import { fetchGroupProducts } from './redux/products';
import SignupForm from './components/signup/SignupForm';
import App from './components/loginForm/LoginForm';
import { setSignupFormOpen } from './redux/landingPage';

export default function Home() {
  const { signupFormOpen } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  dispatch(fetchGroupProducts('Mobile'));

  return (
    <>
      <Header />
      <Categories />
      <SlideShow />
      <PopularPosts />
      <SignupForm />
      <App />
      <Footer />
    </>  
)
};
