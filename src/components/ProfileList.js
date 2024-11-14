import React, { useState } from 'react';
import ProfileCard from './ProfileCard';

const ProfileList = ({ profiles }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(null);

  // Filter profiles by name, description, and location
  const filteredProfiles = profiles.filter((profile) => {
    const matchesName = profile.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDescription = profile.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = locationFilter
      ? profile.location.lat.toString().includes(locationFilter) || profile.location.lng.toString().includes(locationFilter)
      : true;

    return (matchesName || matchesDescription) && matchesLocation;
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLocationFilterChange = (e) => {
    setLocationFilter(e.target.value);
  };

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  const closeSummary = () => {
    setSelectedProfile(null);
  };

  return (
    <div>
      <div className="filters">
        <input
          type="text"
          placeholder="Search by Name or Description"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <input
          type="text"
          placeholder="Search by Location (Latitude/Longitude)"
          value={locationFilter}
          onChange={handleLocationFilterChange}
        />
      </div>

      {selectedProfile ? (
        <div className="profile-summary">
          <h2>{selectedProfile.name}</h2>
          <p><strong>Job Title:</strong> {selectedProfile.jobTitle}</p>
          <p><strong>Description:</strong> {selectedProfile.description}</p>
          <p><strong>Location:</strong> Latitude: {selectedProfile.location.lat}, Longitude: {selectedProfile.location.lng}</p>
          <p><strong>Contact:</strong> {selectedProfile.contact}</p>
          <p><strong>Hobbies:</strong> {selectedProfile.hobbies.join(', ')}</p>
          <button onClick={closeSummary}>Close</button>
        </div>
      ) : (
        <div className="profile-list">
          {filteredProfiles.length === 0 ? (
            <p>No profiles found.</p> // Message when no profiles match the filters
          ) : (
            filteredProfiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} onSummaryClick={handleSummaryClick} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileList;
