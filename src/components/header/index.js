import React, { useState, useEffect } from 'react';
import style from './style.module.css';

import { getCities, searchRestaurants } from '../cheat-sheets/api-call/api';
import { parseCitySuggestions, parseSearchRestaurants } from '../cheat-sheets/api-call/utils';
import CitySuggestions from '../cheat-sheets/api-call/city-suggestions';
import Restaurants from '../cheat-sheets/api-call/restaurants';


//const yourApiCall = () => Promise.resolve('hello world!');
const Post = ({ src }) => <img className="post" alt="post" src={src} />;
const Header = () => {
    const cityQuery = 'Jakarta';
    const [citySuggestions, setCitySuggestions] = useState([]);
    const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const searchRestaurantsFromCity = async () => {
      const cities = parseCitySuggestions(await getCities(cityQuery));
      setCitySuggestions(cities);

      if (cities.length > 0) {
        const restaurants = parseSearchRestaurants(
          await searchRestaurants(cities[0].id)
        );
        setRestaurants(restaurants);
      }
    };

    searchRestaurantsFromCity();
  }, []);
    const postCount = 5;
    return (
        <div className={style.center}>
            <div className={style.main}>
                <div className="logo">
                    <h1>GoZomato</h1>
                 </div>
                <div>
                    <h3>current city: </h3>
                    <input type="text"></input>
                </div>
                <div>
                    <button>Change City</button>
                </div>
                <div>
                {restaurants.map(e => (
                    <Restaurants key={e.id} data={e} />
                ))}
                </div>
            </div>
        </div>
        );
    };
    
    export default Header;
    