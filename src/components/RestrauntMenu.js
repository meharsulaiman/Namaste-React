import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../config.js';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant.js';
import useMenu from '../utils/useMenu.js';
import { addItem } from '../utils/cartSlice.js';
import { useDispatch } from 'react-redux';

const RestrauntMenu = () => {
  const { id } = useParams();
  const rest = useRestaurant(id);
  const menu = useMenu(id);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return !rest ? (
    <Shimmer />
  ) : (
    <div className=''>
      <div
        style={{
          backgroundImage: `url(${IMG_CDN_URL}${rest?.cloudinaryImageId})`,
        }}
        className='menu-container flex h-[50vh] w-full flex-col items-center justify-center bg-cover bg-no-repeat text-white'
      >
        <h1 className='text-3xl font-bold'>{rest?.name}</h1>
        <h1 className='text-xl'>Restaurant ID: {rest?.id}</h1>
        {/* <img src={IMG_CDN_URL + rest?.cloudinaryImageId} alt="" /> */}
        <h3 className='text-lg'>{rest?.areaName}</h3>
        <h3 className='text-lg'>{rest?.city}</h3>
        <h3 className='text-base'>{rest?.avgRating} Starts</h3>
        <h3 className='text-base'>{rest?.costForTwoMessage}</h3>
      </div>

      <div className='rest-menu'>
        <h1 className='m-5 text-center text-5xl font-medium'>Menu</h1>
        <ul>
          {menu?.map((m) => (
            <li key={m.id}>
              {m.name}
              <button
                className='m-5 rounded bg-green-200 px-2 py-1 transition-all hover:bg-green-300'
                onClick={() => handleAddItem(m.name)}
              >
                Add item
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestrauntMenu;
