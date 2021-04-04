import React from 'react';
import Header from '../components/Header';
import '../assets/styles/components/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouseItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Search />
      <Categories title='Lista Favorita'>
        <Carousel>
          <CarouseItem />
          <CarouseItem />
          <CarouseItem />
        </Carousel>
      </Categories>

      <Categories title='Lista Recomendada'>
        <Carousel>
          <CarouseItem />
          <CarouseItem />
          <CarouseItem />
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
