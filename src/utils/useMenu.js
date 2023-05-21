import { useState, useEffect } from 'react';
import { MENU_URI } from '../config';

const useMenu = (id) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URI + id + '&categories=true');
    const json = await data.json();
    setMenu(Object?.values(json?.data?.menu?.items));
  };

  return menu;
};

export default useMenu;
