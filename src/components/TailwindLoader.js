import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { isStringIncludedInAnyAttribute } from "../utils";

import Loader from './Loader';

const TailwindLoader = () => {
  const styleSheetName = "tailwind";
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    function deleteStyleSheet(str) {
      // Unload the dynamically imported CSS when the component is unmounted
      const styleSheets = document.styleSheets;
    
      for (let i = styleSheets.length - 1; i >= 0; i--) {
        const styleSheet = styleSheets[i];
    
        if (isStringIncludedInAnyAttribute(styleSheet.ownerNode, str)) {
          (styleSheet.ownerNode.href && import.meta.env.PROD) ? globalThis.tailwindUrl = styleSheet.ownerNode.href : null;
          styleSheet.ownerNode.remove();
        }
      }
    }

    function createStyleSheet(id, cssModule, callback) {
      deleteStyleSheet(id);

      if (import.meta.env.PROD) {
        const styleElement = document.createElement('link');
        styleElement.href = globalThis.tailwindUrl;
        styleElement.rel="stylesheet";
        
        document.head.appendChild(styleElement);
        styleElement.onload = callback;
      }
      else {
        const styleSheetContent = cssModule.default;
        const styleElement = document.createElement('style');
  
        styleElement.id = id;
        styleElement.appendChild(document.createTextNode(styleSheetContent));
        document.head.appendChild(styleElement);
  
        styleElement.onload = callback;
      }
    }

    // Import the necessary CSS file dynamically
    import("../styles/tailwind.scss")
      .then((cssModule) => {
        createStyleSheet(styleSheetName, cssModule, () => {
          setIsLoaded(true);
        });
      })
      .catch((error) => {
        console.error('Error loading Tailwind CSS:', error);
      });

    // Cleanup function to handle unmounting
    return () => {
      deleteStyleSheet(styleSheetName);
    };
  }, []);

  // Show the loader until CSS is loaded
  if (!isLoaded) {
    return <Loader />;
  }

  return <Outlet />
};

export default TailwindLoader;