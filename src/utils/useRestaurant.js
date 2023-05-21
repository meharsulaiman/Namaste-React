import { useState, useEffect } from 'react';
import { REST_URI } from '../config';

const useRestaurant = (id) => {
  const [rest, setRest] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  // * Get data from API endpoint
  const fetchData = async () => {
    const data = await fetch(REST_URI + id);
    const json = await data.json();
    setRest(json?.data?.cards[0]?.card?.card?.info);
  };

  //* return restaurant data
  return rest;
};

export default useRestaurant;
