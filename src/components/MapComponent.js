// googleMapsApiKey="AIzaSyC0qGWSzhm9Cifg3f_0LzHuP1WiKSw0rj4" 

import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const MapComponent = ({ location }) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const isValidLatitude = (lat) => lat >= -90 && lat <= 90;
  const isValidLongitude = (lng) => lng >= -180 && lng <= 180;

  useEffect(() => {
    if (!isValidLatitude(location.lat) || !isValidLongitude(location.lng)) {
      setErrorMessage('Invalid location data. Please provide valid latitude and longitude.');
    } else {
      setErrorMessage(null);
    }
  }, [location]);

  return (
    <div>
      {errorMessage && <p>{errorMessage}</p>}
      {!errorMessage && (
        <LoadScript googleMapsApiKey="AIzaSyC0qGWSzhm9Cifg3f_0LzHuP1WiKSw0rj4" >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={{ lat: parseFloat(location.lat), lng: parseFloat(location.lng) }}
            zoom={10}
          >
            <Marker position={{ lat: parseFloat(location.lat), lng: parseFloat(location.lng) }} />
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
};

export default MapComponent;
