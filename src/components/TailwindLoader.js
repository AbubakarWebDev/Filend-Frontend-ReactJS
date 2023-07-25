import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from './Loader';

const TailwindLoader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Import the necessary Tailwind CSS file dynamically
    import('../styles/tailwind.scss')
      .then(() => {
        // Once the CSS is loaded, set the loaded state to true
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error('Error loading Tailwind CSS:', error);
      });
  }, []);

  // Show the loader until CSS is loaded
  if (!isLoaded) {
    return <Loader />;
  }

  return <Outlet />;
};

export default TailwindLoader;