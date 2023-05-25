import React, { useContext } from 'react';

import { Outlet, Link } from 'react-router-dom';
import ProfileClass from './ProffileClass';
import userContext from '../context/userContext';

const About = () => {
  const {user} = useContext(userContext)
  return (
    <div className='px-5'>
      <div>
        <h1 className='my-5 text-2xl font-medium'>{user.name} - {user.email}</h1>
        <h1 className='text-center font-bold text-3xl my-2'>About</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas unde
          excepturi voluptatibus error hic praesentium debitis repudiandae a
          blanditiis veritatis molestiae, soluta aut. Libero veritatis pariatur
          aspernatur quibusdam perspiciatis tenetur consectetur, vitae
          distinctio, animi quo quia ea omnis dolorem magni excepturi
          reiciendis? Nihil, molestiae similique?
        </p>
        <Link
          to='profile'
          style={{ margin: '0 10px 0 0' }}
          className='cursor-pointer rounded border px-2 py-1 font-bold'
        >
          Show Profile
        </Link>
        <Link
          to='/about'
          className='cursor-pointer rounded border px-2 py-1 font-bold'
        >
          Hide Profile
        </Link>
      </div>
      <ProfileClass name='Sulaiman Class' />
      <Outlet />
    </div>
  );
};

export default About;
