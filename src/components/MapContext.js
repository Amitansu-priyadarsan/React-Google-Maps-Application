// src/components/MapContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const MapContext = createContext();

// Custom hook to use the MapContext
export const useMapContext = () => {
  return useContext(MapContext);
};

// MapProvider component to provide context value to the app
export const MapProvider = ({ children }) => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (isMapLoaded) {
      console.log("Google Maps successfully loaded.");
    }
  }, [isMapLoaded]);

  const handleMapLoad = () => {
    setIsMapLoaded(true);
  };

  const handleMapError = (error) => {
    console.error('Google Maps API error:', error);
    setErrorMessage('Failed to load Google Maps. Please check your API key or internet connection.');
  };

  return (
    <MapContext.Provider value={{ isMapLoaded, errorMessage, handleMapLoad, handleMapError }}>
      {children}
    </MapContext.Provider>
  );
};
