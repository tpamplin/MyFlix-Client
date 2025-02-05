# Myflix-client

This is the front end client for my MyFlix app.
Through this client you can access the MyFlix database, and display information about different movies, actors, and genres, as well as maintain your own list of favorite movies.

To see the backend of this application click (here)[https://github.com/tpamplin/js-movie-api]

To see this app in action click (here)[https://pamplin-myflix.netlify.app/]

## Features

### Welcome View

-   Allows the user to select if they want to log in or sign up for a new account.

### Login View

-   User Authentication: Allows the user to log in using their username and password.

### Signup View

-   User Registration:
    -   New users can register by providing their username, password, email, and birthday.

### Main View

-   See all Movies: Displays all movies with a title, image, and genre.
-   Search Functionality: Users can search for a specific movie in the list by name.
-   Movie Selection: Users can click on a movie to view more information about it.
-   User Navigation:
    -   You can log out.
    -   Navigate to the Profile view to view and manage user details and favorites.

### Single Movie View

-   Detailed Movie Data:
    -   Shows detailed information about a specific movie, including title, director, genre and an image.
-   Favorite Movie: Contains a button the user can press to add/remove a movie from their favorites list.

### Profile View

-   User Details:
    -   Shows user account details.
    -   Users can update their username, password, email, and birthday.
-   Favorite Movies:
    -   Shows a list of favorite movies.
    -   You can click on the title of any movie in the favorites list to navigate to it's details page.
-   Delete Account: Current users can delete their account from the database.

## Technologies Used

-   Framework: React
-   Styling: CSS/SCSS, React-Bootstrap
-   API Integration: Fetch API
-   Routing: React Router
-   Compiling: parcel

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/tpamplin/MyFlix-Client.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the server:

    ```bash
    npm start
    ```
