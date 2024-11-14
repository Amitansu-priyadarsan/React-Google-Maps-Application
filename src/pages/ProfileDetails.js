
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProfileDetails.css';

const ProfileDetails = ({ profiles }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const profile = profiles.find((p) => p.id === parseInt(id));

  if (!profile) return <p>Profile not found.</p>;

  return (
    <div className="profile-details-container">
      <h2 className="profile-name">{profile.name}</h2>

      <p className="profile-description">{profile.description}</p>

      <div className="profile-location">
        <h3>Location:</h3>
        <p>{profile.location.lat}, {profile.location.lng}</p>
      </div>
      <div className="profile-location">
        <h3>Hobbies:</h3>
        <p>{profile.hobbies}</p>
      </div>
      <div className="profile-location">
        <h3>Contact:</h3>
        <p>{profile.contact}</p>
      </div>

   
      <button onClick={() => navigate('/')} className="homepage-button">
        Go to Homepage
      </button>
    </div>
  );
};

export default ProfileDetails;
