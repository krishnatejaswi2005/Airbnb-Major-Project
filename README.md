# Wanderlust - Airbnb Clone

Wanderlust is a web application that replicates the functionality of Airbnb, enabling users to browse, create, and manage property listings. Built with modern web technologies, this project emphasizes a user-friendly interface and robust backend features.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
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
- **Frontend**: HTML, CSS, Bootstrap, EJS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **APIs**: Cloudinary for image storage, Mapbox for mapping and geocoding
- **Authentication**: Passport.js for secure password handling
- **Deployment**: Render.com for hosting the application
- **Version Control**: Git

## Getting Started
To set up a local copy of this project for development and testing, follow these steps:

1. **Ensure you have Git installed** on your machine. If not, download it from [git-scm.com](https://git-scm.com/).

2. **Open your terminal or command prompt**.

3. **Clone the repository**:
   ```bash
   https://github.com/krishnatejaswi2005/Airbnb-Major-Project.git
   ```

4. **Navigate to the project directory**:
   ```bash
   cd Airbnb-Major-Project
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


## Usage
- Visit `http://localhost:3000` in your browser to access the application.
- Users can register for an account or log in to access additional features.
- Logged-in users can create property listings, manage them, and interact with other users through reviews.

## Deployment
Wanderlust is deployed on Render.com. You can view the live application at the following URL:
[Wanderlust Live Demo](https://airbnb-major-project-vru8.onrender.com)

## Contributing
Contributions are welcome! If you have suggestions for improvements, feel free to open an issue or submit a pull request.

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
