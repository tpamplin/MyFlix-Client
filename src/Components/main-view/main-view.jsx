import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { NoUserView } from "../no-user-view/no-user-view";


export const MainView = () => {
    const [movies, setMovies] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState(null);
    
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(storedUser? storedUser : null);

    const storedToken = localStorage.getItem("token")
    const [token, setToken] = useState(storedToken? storedToken : null);


    useEffect(() => {
        if (!token){
            return;
        }

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
        return( 

        <NoUserView
            userData={(user, token) => {
                setUser(user); 
                setToken(token);
                }}    
        />

        )
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
            <button onClick={() => {setUser(null); setToken("null"); localStorage.clear();}}>Logout</button>
        </div>
    );
};