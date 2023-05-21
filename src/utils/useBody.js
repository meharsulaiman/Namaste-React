import { useEffect, useState } from 'react';
import { filterData } from '../utils/helper';
const useBody = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [text, setText] = useState('');
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const clickHandler = () => {
    const data = filterData(text, allRestaurants);
    setFilteredRestaurant(data);
  };

  return [
    text,
    allRestaurants,
    filteredRestaurant,
    clickHandler,
    onChangeInput,
  ];
};

export default useBody;
