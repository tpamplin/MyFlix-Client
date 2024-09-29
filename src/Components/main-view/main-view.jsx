import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { NoUserView } from "../no-user-view/no-user-view";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


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


    return(
        <Row className="justify-content-md-center">
            { !user ? (
                <Col md={8}>
                    <NoUserView
                    userData={(user, token) => {
                        setUser(user); 
                        setToken(token);
                    }}    
                    />
                </Col >
            ) : selectedMovie ? (
                <Col md={8}>
                    <MovieView 
                        movie={selectedMovie} 
                        onBackClick={() => setSelectedMovie(null)} 
                    />
                </Col>
            ) : movies.length === 0 ? (
                <Col md={8}>
                    <div>The list is empty!</div>
                </Col>
            ) : (
                <Col md={8}>
                    {movies.map((movie) => (
                        <MovieCard 
                            key={movie.Id} 
                            movie={movie} 
                            onMovieClick={(newSelectedMovie) => {
                                setSelectedMovie(newSelectedMovie)
                            }} 
                        />
                    ))}
                    <button onClick={() => {setUser(null); setToken(null); localStorage.clear();}}>Logout</button>
                </Col> 
            )}
        </Row>
    );
};