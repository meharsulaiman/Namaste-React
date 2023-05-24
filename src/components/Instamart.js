import React, { useState } from 'react';

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className='m-2 rounded border p-2'>
      <h3 className='text-2xl font-bold'>{title}</h3>
      <button
        className='cursor-pointer rounded border px-2 py-1 font-bold'
        onClick={() => setIsVisible()}
      >
        {isVisible ? 'Hide' : 'Show'}
      </button>
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [sectionConfig, setSectionConfig] = useState('showOne');
  return (
    <div>
      <h1 className='text-center text-3xl font-bold'>Instamart</h1>

      <Section
        title='Hello! My World'
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda qui
      reprehenderit mollitia? Illo corporis debitis, quam consectetur nisi
      doloribus! Sint qui quod dolores! Pariatur aliquam quisquam saepe quasi
      expedita maiores!'
        isVisible={sectionConfig === 'showOne'}
        setIsVisible={() => setSectionConfig('showOne')}
      />
      <Section
        title='Bye Bye! I am Done with you'
        description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda qui
      reprehenderit mollitia? Illo corporis debitis, quam consectetur nisi
      doloribus! Sint qui quod dolores! Pariatur aliquam quisquam saepe quasi
      expedita maiores!'
        isVisible={sectionConfig === 'showTwo'}
        setIsVisible={() => setSectionConfig('showTwo')}
      />
    </div>
  );
};
export default Instamart;
