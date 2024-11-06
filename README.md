# Stayio - Airbnb Clone

Stayio is a web application that replicates the functionality of Airbnb, enabling users to browse, create, and manage property listings. Built with modern web technologies, this project emphasizes a user-friendly interface and robust backend features.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Application Workflow](#application-workflow)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features
- **User Authentication**: Users can sign up, log in, and manage their profiles securely.
- **Property Listings**: Users can view all listings without logging in, and logged-in users can create, edit, or delete their own listings.
- **Review System**: Users can leave reviews on listings and manage their own reviews.
- **Image Upload**: Property images can be uploaded and stored using Cloudinary.
- **Map Integration**: Property locations are displayed on a map using the Mapbox API, with geocoding features.
- **Responsive Design**: The application is responsive and accessible from any device.
- **Client and Server Validation**: Ensures data integrity and user input validation using Joi schema.
- **Error Handling**: Comprehensive error handling with WrapAsync and express-error for runtime exceptions.

## Technologies Used
- **Frontend**: CSS, Bootstrap, EJS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose, Mongo Atlas
- **APIs**: Cloudinary for image storage, Mapbox for mapping and geocoding
- **Authentication**: Passport npm for secure password handling
- **Deployment**: Render.com for hosting the application
- **Version Control**: Git

## Getting Started
To set up a local copy of this project for development and testing, follow these steps:

1. **Ensure you have Git installed** on your machine. If not, download it from [git-scm.com](https://git-scm.com/).

2. **Open your terminal or command prompt**.

3. **Clone the repository**:
   ```bash
   https://github.com/krishnatejaswi2005/stayiotravelandstayt.git
   ```

4. **Navigate to the project directory**:
   ```bash
   cd stayiotravelandstay
   ```

5. **Install the dependencies**:
   ```bash
   npm install
   ```

6. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL=your_mongo_db_connection_string
   CLOUDINARY_URL=your_cloudinary_url
   MAPBOX_TOKEN=your_mapbox_token
   SESSION_SECRET=your_session_secret
   ```

7. **Run the application**:
   Use `nodemon` to run the application:
   ```bash
   nodemon index.js
   ```


## Application Workflow

This section provides an overview of how the Wanderlust web application functions, including user interactions, data flow, and backend processes.

### 1. User Visits the Application
- **Public Access**: Any user visiting the website (even without logging in) can:
  - View all property listings.
  - View listing details, including images, descriptions, reviews, and location on a map.

### 2. User Registration and Login
- **Sign Up**: Users can create an account by registering with a username, email, and password. The password is securely hashed and salted using the Passport.js authentication package.
- **Login**: Registered users can log in to access additional features, such as creating and managing their own listings and reviews.
- **Session Management**: Upon login, user data is stored in an express session, with signed cookies for secure session handling. Users are notified with flash messages upon successful login or logout.

### 3. Creating a Property Listing (Authenticated Users Only)
- **Form Submission**: Logged-in users can create a new property listing by filling out a form with details like the listing name, description, location, and uploading images.
- **Image Upload**: Images are uploaded and stored on Cloudinary, a cloud storage service.
- **Location Mapping**: The location entered by the user is geocoded using the Mapbox API, converting it to coordinates, which are then marked on an interactive map within the listing.
- **Database Storage**: Listing details are saved to Mongo Atlas via Mongoose, which facilitates easy data management.

### 4. Viewing and Interacting with Listings
- **Listing Page**: Each listing has a dedicated page displaying:
  - Property images, location on a map, reviews, and other details.
- **Search and Filter**: Users can view listings based on search terms or apply filters, though the search bar and filters are placeholders without functionality in this version.

### 5. Managing Listings (Authenticated Users Only)
- **Edit or Delete**: Users can only edit or delete their own listings.
  - **Edit Listing**: Users can update details like images, description, and location of their listings.
  - **Delete Listing**: Users can remove their listings permanently. All associated data, including reviews, is updated in the database.
- **Authorization**: Authorization checks are in place to prevent users from modifying or deleting listings that don’t belong to them.

### 6. Reviews System (Authenticated Users Only)
- **Adding a Review**: Logged-in users can leave a review on any listing with a rating (1-5 stars) and a comment. Star ratings are implemented using the Starability package.
- **Review Management**: Users can delete only their own reviews, ensuring data integrity and secure access control.

### 7. Client and Server-Side Validation
- **Client-Side Validation**: Form inputs are validated on the client side to provide immediate feedback to the user.
- **Server-Side Validation**: Joi schema middlewares validate all incoming data on the server to prevent invalid entries from being stored in the database.

### 8. Error Handling and Flash Messages
- **Error Handling**: Runtime errors and exceptions are managed with WrapAsync and express-error, ensuring a smooth user experience and descriptive error feedback.
- **Flash Messages**: Flash messages notify users about actions (e.g., successful login, logout, listing creation, etc.) to enhance the interaction flow.

### 9. User Logout
- **Logout**: Users can log out at any time, clearing their session data and signing them out securely. Flash messages confirm a successful logout.

### 10. Database and Deployment
- **Database**: All user, listing, and review data is stored on MongoDB Atlas, a cloud-based database solution.
- **Deployment**: The application is hosted on Render.com, making it accessible from any device. Responsive design ensures the application is accessible and functional on both mobile and desktop devices.

## Deployment
Stayio is deployed on Render.com. You can view the live application at the following URL:
[Stayio Live Demo](https://stayio-travel-and-stay.onrender.com)

## Contributing
Contributions are welcome! If you have suggestions for improvements, feel free to open an issue or submit a pull request.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
