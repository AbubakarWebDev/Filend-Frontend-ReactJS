import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from './Loader';

const BootstrapLoader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Import the necessary Bootstrap CSS file dynamically
    import('../styles/globals.scss')
      .then(() => {
        // Once the CSS is loaded, set the loaded state to true
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error('Error loading Bootstrap CSS:', error);
      });
  }, []);

  // Show the loader until CSS is loaded
  if (!isLoaded) {
    return <Loader />;
  }

  return <Outlet />;
};

export default BootstrapLoader;