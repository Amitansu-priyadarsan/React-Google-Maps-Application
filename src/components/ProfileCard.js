import React from 'react';

const ProfileCard = ({ profile, onSummaryClick }) => {
    return (
        <div className="profile-card">
            <div className="profile-info">
                {/* Uncomment this if you want to show an image */}
                {/* <img src={profile.image} alt={profile.name} className="profile-image" /> */}
                <h2>{profile.name}</h2>
                <p>{profile.jobTitle}</p>
            </div>
            {/* Prevent the profile card click action when clicking on the summary button */}
            <button onClick={(e) => {
                e.stopPropagation();  // Stop the profile card's onClick from firing
                onSummaryClick(profile);
            }}>
                Summary
            </button>
        </div>
    );
};

export default ProfileCard;
