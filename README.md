# React Google Maps Application 🌍📍

This application integrates Google Maps into a React project and demonstrates key features such as error boundaries, profile management, and location-based filtering. It uses the Google Maps API to display maps and markers based on location data, and includes an error handling mechanism to catch and display errors gracefully.

## Features ✨

- **Google Maps Integration**: Displays maps with markers based on given location data. 🗺️
- **Error Boundary**: Catches and handles errors in the application, showing a user-friendly error message when something goes wrong. ⚠️
- **Profile Management**: Includes a profile card display with a search and filter feature for managing profile data, including a map to show locations of each profile. 🧑‍💼📋
- **Location Filtering**: Filters profiles based on location (latitude/longitude). 🌍🔍
- **Admin Panel**: Allows users to add, edit, and delete profiles, with form validation for location data. ⚙️🔧

## Installation ⚡

1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   cd <repository_directory>

   ```
2.Install dependencies: Make sure you have npm
```bash
npm install
```
3.Set up environment variables: Create a .env file in the root of the project and add your Google Maps API key:
```bash
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```
4.Run the application: Start the development server:
```bash
npm start
```

## File Structure 📂
- src/components/ErrorBoundary.js: Handles errors by displaying a fallback UI and logging errors. 🛠️
 -src/components/MapComponent.js: Displays a Google Map with a marker at the provided location. Includes validation for latitude and longitude. 📍
- src/components/MapContext.js: Provides context for managing map loading state and error handling. 📡
- src/components/ProfileCard.js: Displays individual profile information with a button to show the profile summary. 👤
- src/components/ProfileList.js: Manages the list of profiles, including search and filter functionality. 📑
- src/components/AdminPanel.js: Admin panel for adding, editing, and deleting profiles. 🔒

## Technologies Used 🛠️
- React: JavaScript library for building user interfaces ⚛️
- Google Maps API: Service that provides maps and geolocation features 🗺️
- Material-UI: React component library for building modern UIs.
- React Context API: Manages global state for map loading and error handling 🔄
- React Router: For managing navigation between different pages/components 🔗
- @react-google-maps/api: Wrapper around Google Maps JavaScript API for use with React 🖥️

## Usage 🚀
1. Profile Search & Filter:
Users can search for profiles by name or description, and filter them by location (latitude/longitude).
2. Profile Summary:
Clicking on the "Summary" button will show detailed profile information, including location on the map.
3. Admin Panel:
Admins can add, edit, or delete profiles. Location validation ensures that the coordinates entered are valid before saving.
4. Map Rendering:
The MapComponent renders a Google Map based on the given latitude and longitude. A marker is displayed at the specified location.

## Contributing 🤝
- Feel free to fork the repository and submit pull requests. Please ensure that your changes align with the existing code style and include tests for any new functionality.

## License 📜
This project is licensed under the MIT License - see the LICENSE file for details.







