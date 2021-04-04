import React from 'react';
import Header from '../components/Header';
import '../assets/styles/components/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouseItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

const API = 'http://localhost:3000/initialState';
const App = () => {
  const initialState = useInitialState(API);
  return (

    <div className='App'>
      <Header />
      <Search />
      {
        initialState.mylist.length > 0 && (
          <Categories title='Mi Lista'>
            <Carousel>
              {
                // eslint-disable-next-line react/jsx-props-no-spreading
                initialState.mylist.map((item) => <CarouseItem key={item.id} {...item} />)
              }
            </Carousel>
          </Categories>
        )
      }

      <Categories title='Tendencias'>
        <Carousel>
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            initialState.trends.map((item) => <CarouseItem key={item.id} {...item} />)
          }

        </Carousel>
      </Categories>

      <Categories title='Originales'>
        <Carousel>
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            initialState.originals.map((item) => <CarouseItem key={item.id} {...item} />)
          }

        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
