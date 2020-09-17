import React from 'react';

const Restaurants = ({ data }) => {
  const { name, picture, cuisines, priceRange, rating } = data;

  /*Template
  return (
    <div>
      <div>name: {name}</div>
      <div>picture: {picture}</div>     
      <div>cuisines: {cuisines}</div>
      <div>priceRange: {priceRange}</div>
      <div>rating: {rating}</div>
    </div>
  );*/
  
  
  return (
    <div>
      <img src={picture}></img>
      <div>name: {name}</div>
      <div>cuisines: {cuisines}</div>
      <div>priceRange: {priceRange}</div>
      <div>rating: {rating}</div>
    </div>
  );
};

export default Restaurants;
