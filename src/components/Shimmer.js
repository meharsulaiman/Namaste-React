import React from 'react';

const Shimmer = () => {
  return (
    <div>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-5 justify-items-center items-center justify-center w-11/12 m-auto'>
        {Array(10)
          .fill('')
          .map((e, i) => (
            <div
              className='w-[200px] h-[210px] shimmer-animation rounded-lg overflow-hidden shadow-lg bg-gray-200'
              key={i}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
