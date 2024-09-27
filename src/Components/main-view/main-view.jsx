import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";

export const MainView = () => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);


    useEffect(() => {
        console.log("checking for token")
        if (!token){
            console.log("no token found")
            return;
        }
        console.log("token found: ", token)

        fetch("https://myflix-timpamplin-021f285e4632.herokuapp.com/movies/", {
            headers: { Authorization: `Bearer ${token}`}
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("movies from api: ", data);
            const moviesFromApi = data.map((doc) => {
                return {
                    Id: doc._id,
                    Title: doc.Title,
                    Image: doc.ImagePath,
                    Director: doc.Director,
                    Genre: doc.Genre,
                    Description: doc.Description
                };
            });
            setMovies(moviesFromApi);
        });
    }, [token]);


    if (!user) { 
        return <LoginView 
        onLoggedIn={(user, token) => {
            setUser(user); 
            setToken(token);
            console.log("token set to: ", token)
            }}
        />
    }

    if (selectedMovie){
        return(
            <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        )
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieCard 
                    key={movie.Id} 
                    movie={movie} 
                    onMovieClick={(newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie)
                    }} 
                />
            ))}
            <button onClick={() => {setUser(null); setToken("null");}}>Logout</button>
        </div>
    );
};