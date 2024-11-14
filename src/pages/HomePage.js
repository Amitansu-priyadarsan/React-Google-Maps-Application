
import React, { useState } from 'react';
import './Homepage.css';  

import ProfileCard from '../components/ProfileCard';
import MapComponent from '../components/MapComponent';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ profiles }) => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();


  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const goToAdminPanel = () => {
    navigate('/admin');
  };


  const goToProfileDetails = () => {
    if (selectedProfile) {
      navigate(`/profile/${selectedProfile.id}`);
    }
  };



  return (
    <div className="container">
      <h1>Welcome to the Profile Page</h1>

      {/* Search Bar */}
      <input
        className="search-bar"
        type="text"
        placeholder="Search profiles..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Profile List */}
      <div className="profile-list">
        {filteredProfiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} onSummaryClick={setSelectedProfile} />
        ))}
      </div>

      {/* Map Component for selected profile */}
      {selectedProfile && <MapComponent location={selectedProfile.location} />}

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button onClick={goToAdminPanel}>Go to Admin Panel</button>
        {selectedProfile && (
          <>
            <button onClick={goToProfileDetails}>View Profile Details</button>
           
          </>
        )}
      </div>
    </div>
  );
};

export default HomePage;
