import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, TextField, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@mui/styles';
import MapComponent from '../components/MapComponent';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    width: '80%',
    margin: '0 auto',
    padding: '30px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 15px 25px rgba(0, 0, 0, 0.1)',
    marginBottom: '30px',
  },
  button: {
    margin: '0 10px',
    padding: '10px',
    fontSize: '1rem',
    transition: 'transform 0.2s ease, backgroundColor 0.3s ease',
    '&:hover': {
      transform: 'scale(1.1)',
    },
    '&:active': {
      transform: 'scale(1)',
    },
  },
  editButton: {
    backgroundColor: '#2196F3',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#1976D2',
    },
  },
  deleteButton: {
    backgroundColor: '#FF5722',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#E64A19',
    },
  },
  icon: {
    color: '#fff',
    fontSize: '1.5rem',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px',
    margin: '5px 0',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    },
  },
  summaryContainer: {
    backgroundColor: '#f0f4f8',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  summaryTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#333',
  },
  summaryText: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '10px',
  },
}));

const AdminPanel = ({ profiles, addProfile, updateProfile, deleteProfile }) => {
  const [profile, setProfile] = useState({ name: '', description: '', contact: '', hobbies: '', location: { lat: '', lng: '' } });
  const [isEditing, setIsEditing] = useState(false);
  const [viewSummary, setViewSummary] = useState(false);
  const navigate = useNavigate();
  const classes = useStyles();

  const isLocationValid = (lat, lng) => {
    return Number.isFinite(lat) && Number.isFinite(lng) && lat !== 0 && lng !== 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const lat = parseFloat(profile.location.lat);
    const lng = parseFloat(profile.location.lng);

    if (isLocationValid(lat, lng)) {
      if (isEditing) {
        updateProfile(profile);
      } else {
        addProfile(profile);
      }
      setProfile({ name: '', description: '', contact: '', hobbies: '', location: { lat: '', lng: '' } });
      setIsEditing(false);
      setViewSummary(true); 
    } else {
      alert('Profile Saved');
      setViewSummary(false); 
    }
  };

  const handleEdit = (profile) => {
    setProfile(profile);
    setIsEditing(true);
    setViewSummary(false);
  };

  return (
    <div>
      <div className={classes.formContainer}>
        {viewSummary ? (
          isLocationValid(parseFloat(profile.location.lat), parseFloat(profile.location.lng)) ? (
            <div>
              <h2>Summary</h2>
              <p><strong>Name:</strong> {profile.name}</p>
              <p><strong>Description:</strong> {profile.description}</p>
              <p><strong>Contact:</strong> {profile.contact}</p>
              <p><strong>Hobbies:</strong> {profile.hobbies}</p>
              <p><strong>Location:</strong> Latitude: {profile.location.lat}, Longitude: {profile.location.lng}</p>
              <MapComponent location={{ lat: parseFloat(profile.location.lat), lng: parseFloat(profile.location.lng) }} />
              <Button variant="contained" color="primary" onClick={() => setViewSummary(false)}>
                Edit Profile
              </Button>
            </div>
          ) : (
            <p>Profile Saved</p>
          )
        ) : (
          <div>
            <h2>{isEditing ? 'Edit Profile' : 'Add Profile'}</h2>
            <form onSubmit={handleSubmit}>
              <TextField
                type="text" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                placeholder="Name" label="Name" fullWidth margin="normal"
              />
              <TextField
                type="text" value={profile.description} onChange={(e) => setProfile({ ...profile, description: e.target.value })}
                placeholder="Description" label="Description" fullWidth margin="normal"
              />
              <TextField
                type="text" value={profile.contact} onChange={(e) => setProfile({ ...profile, contact: e.target.value })}
                placeholder="Contact" label="Contact" fullWidth margin="normal"
              />
              <TextField
                type="text" value={profile.hobbies} onChange={(e) => setProfile({ ...profile, hobbies: e.target.value })}
                placeholder="Hobbies" label="Hobbies" fullWidth margin="normal"
              />
              <TextField
                type="number" value={profile.location.lat} onChange={(e) => setProfile({ ...profile, location: { ...profile.location, lat: e.target.value } })}
                placeholder="Latitude" label="Latitude" fullWidth margin="normal"
              />
              <TextField
                type="number" value={profile.location.lng} onChange={(e) => setProfile({ ...profile, location: { ...profile.location, lng: e.target.value } })}
                placeholder="Longitude" label="Longitude" fullWidth margin="normal"
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                {isEditing ? 'Update' : 'Save'}
              </Button>
            </form>
          </div>
        )}
      </div>

      <h3>Profiles</h3>
      <ul>
        {profiles.map((p) => (
          <li key={p.id} className={classes.listItem}>
            {p.name} - {p.description}
            <div>
              <IconButton className={`${classes.button} ${classes.editButton}`} onClick={() => handleEdit(p)}>
                <EditIcon className={classes.icon} />
              </IconButton>
              <IconButton className={`${classes.button} ${classes.deleteButton}`} onClick={() => deleteProfile(p.id)}>
                <DeleteIcon className={classes.icon} />
              </IconButton>
            </div>
          </li>
        ))}
      </ul>
      <Button variant="outlined" color="primary" onClick={() => navigate('/')}>
        Back to Home Page
      </Button>
    </div>
  );
};

export default AdminPanel;
