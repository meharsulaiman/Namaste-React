import React from 'react';
import { IMG_CDN_URL } from '../config';
const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className='w-[200px] overflow-hidden rounded-lg bg-gray-50 shadow-lg'>
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <div className='px-3 pb-3 pt-1 text-left'>
        <h2 className='overflow-hidden truncate text-lg font-bold'>{name}</h2>
        <h5 className='overflow-hidden truncate text-sm'>
          {cuisines.join(', ')}
        </h5>
        <h5 className='text-sm'>{lastMileTravelString} minutes</h5>
      </div>
    </div>
  );
};

export default RestrauntCard;
