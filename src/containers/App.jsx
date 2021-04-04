import React from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouseItem from '../components/CarouselItem';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Search />
      <Categories>
        <Carousel>
          <CarouseItem />
          <CarouseItem />
          <CarouseItem />
        </Carousel>
      </Categories>
    </div>
  );
};

export default App;
