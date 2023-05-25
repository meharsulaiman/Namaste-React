import React, { Suspense, lazy, useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Error from './components/Error';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Contact from './components/Contact';
import Profile from './components/Profile';
import Shimmer from './components/Shimmer';
import userContext from './context/userContext';

// Lazy
const Instamart = lazy(() => import('./components/Instamart'));
const About = lazy(() => import('./components/About.js'));
const RestrauntMenu = lazy(() => import('./components/RestrauntMenu.js'));

const App = () => {
  const [user, setUser] = useState({
    name: 'My',
    email: 'my@example.com',
    password: 'password'
  })
  return (
    <userContext.Provider value={{user, setUser}}>
      <Header />
      <div className='h-full'>
      <Outlet />
      </div>
      <Footer />
    </userContext.Provider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/about',
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: 'profile',
            element: <Profile name='Sulaiman Function' />,
          },
        ],
      },
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restaurant/:id',
        element: (
          <Suspense fallback={<Shimmer />}>
            <RestrauntMenu />
          </Suspense>
        ),
      },
      {
        path: '/instamart',
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

export default App;
