import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminPanel from './pages/AdminPanel';
import ProfileDetails from './pages/ProfileDetails';

const App = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'John Doe', description: 'Software Engineer', location: { lat: 37.7749, lng: -122.4194 } , contact: 'john.doe@example.com',
    hobbies: ['Reading'] },
    { id: 2, name: 'Jane Smith', description: 'Product Manager', location: { lat: 34.0522, lng: -118.2437 } , contact: 'jane.smith@example.com',
    hobbies: ['Yoga'] },
  ]);

  const addProfile = (profile) => {
    setProfiles([...profiles, { ...profile, id: Date.now() }]);
  };

  const updateProfile = (updatedProfile) => {
    setProfiles(profiles.map((p) => (p.id === updatedProfile.id ? updatedProfile : p)));
  };

  const deleteProfile = (id) => {
    setProfiles(profiles.filter((p) => p.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage profiles={profiles} />} />
        <Route path="/admin" element={<AdminPanel profiles={profiles} addProfile={addProfile} updateProfile={updateProfile} deleteProfile={deleteProfile} />} />
        <Route path="/profile/:id" element={<ProfileDetails profiles={profiles} />} />
      </Routes>
    </Router>
  );
};

export default App;
