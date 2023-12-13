# Etraveli Movie App List Assignment

This project is a React application that displays a list of Star Wars movies and their details. It utilizes Redux for state management and fetches additional movie details from the OMDB API.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)

## Getting Started

### Prerequisites

Ensure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mute-o-rehman/etraveli-movies-app.git

   ```

2. Change into the project directory: cd etraveli-movies-app
3. Install dependencies: npm install

### Running the Application

- Run the Application npm start
- Visit http://localhost:3000 in your web browser to view the application.

### Folder Structure

The project follows the following folder structure:

- src/: Contains the source code of the React application.
- src/components/: React components used in the application.
- src/redux/: Redux slice for state management.
- src/services/: Services for fetching movie data.
- public/: Static assets and HTML template.

### Contributing

- Contributions are welcome! Feel free to open issues or submit pull requests.

### Overview:

The Etraveli Movies React App assignment involves the creation of a web application that displays information about movies. The app is built using React, Redux for state management, and Jest for testing.

### Project Structure:

The project structure adheres to common React project conventions. Key components include:

### MovieList: Displays a list of movies, allowing users to select and view details for a specific movie.

### MovieDetail: Shows detailed information about the selected movie, including ratings and additional details fetched from an external API.

### MovieHeader: Provides sorting and filtering options for the movie list.

### Code Quality:

- Modular Components: Components are well-organized and modular, promoting code reusability.
- Redux Integration: Redux is effectively used for state management, providing a predictable state container.
- Async Operations: Async operations (e.g., fetching movie details) are handled gracefully using asynchronous actions.
- Error Handling: There are some areas where error handling can be improved, especially in async operations and API calls.

### Testing:

I have tested the app manually. Due to shortage of time unable to implement the jest. But i have basic understanding how to use jest in project.

### Conclusion:

The assignment demonstrates a solid understanding of React, Redux, and asynchronous operations. The modular structure and use of state management contribute to maintainable and scalable code.

Overall, the assignment is well-structured, and with the suggested improvements, it has the potential to be a functional and polished Etraveli Movies React App.
