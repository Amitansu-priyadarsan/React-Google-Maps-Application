// src/components/MapComponent.js
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = ({ location }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading && <div>Loading Map...</div>}
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap mapContainerStyle={{ width: '100%', height: '400px' }} center={location} zoom={10}>
          <Marker position={location} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
