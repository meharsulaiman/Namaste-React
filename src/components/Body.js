import React from 'react';
import RestrauntCard from './RestrauntCard';
import Shimmer from './Shimmer.js';
import { Link } from 'react-router-dom';
import useBody from '../utils/useBody';
import useOnline from '../utils/useOnline';

const Body = () => {
  const isOnline = useOnline();
  const [
    text,
    allRestaurants,
    filteredRestaurant,
    clickHandler,
    onChangeInput,
  ] = useBody();

  return isOnline ? (
    <>
      <div className='flex items-center justify-center'>
        <div className='relative m-4 flex w-4/5 items-center justify-between rounded-full border px-5 py-2 sm:w-2/4'>
          <input
            type='text'
            placeholder='Search'
            className='w-11/12 text-lg focus:outline-none'
            value={text}
            onChange={(e) => onChangeInput(e)}
          />
          <button
            className='absolute inset-y-0 right-0 rounded-r-full bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-700'
            onClick={clickHandler}
          >
            Search
          </button>
        </div>
      </div>

      {allRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className=''>
          <div className='m-auto grid w-11/12 grid-cols-2 justify-items-center gap-y-5 sm:grid-cols-3 lg:grid-cols-4'>
            {filteredRestaurant.map((restaurant) => {
              return (
                <Link
                  to={'/restaurant/' + restaurant.data.id}
                  key={restaurant.data.id}
                >
                  <RestrauntCard {...restaurant.data} />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  ) : (
    <div className='online'>
      <h1>You are Offline, Check your internet connection</h1>
    </div>
  );
};

export default Body;
