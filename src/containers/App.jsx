import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainApp from '../components/Body';
import '../assets/styles/App.scss';

const Home = () => {
  return (
    <div className='App'>
      <Header />
      <MainApp />
      <Footer />
    </div>

  );
};
export default Home;
