import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../assets/styles/components/App.scss';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouseItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const App = () => {
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

  useEffect(() => {
    fetch('http://localhost:3000/initialState')
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  console.log(videos);
  return (

    <div className='App'>
      <Header />
      <Search />
      {
        videos.mylist.length > 0 && (
          <Categories title='Mi Lista'>
            <Carousel>
              <CarouseItem />
            </Carousel>
          </Categories>
        )
      }

      <Categories title='Tendencias'>
        <Carousel>
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            videos.trends.map((item) => <CarouseItem key={item.id} {...item} />)
          }

        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
