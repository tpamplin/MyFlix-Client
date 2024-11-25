import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { NoUserView } from "../no-user-view/no-user-view";
import { SignupView} from "../signup-view/signup-view";
import { LoginView } from "../login-view/login-view";
import { NavigationBar} from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Routes, Route, Navigate, BrowserRouter} from "react-router-dom";


export const MainView = () => {
    const [movies, setMovies] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState(null);
    
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(storedUser? storedUser : null);

    const storedToken = localStorage.getItem("token")
    const [token, setToken] = useState(storedToken? storedToken : null);

    const onLoggedOut = () => {
        localStorage.clear();
        window.location.reload();
    }

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
        <BrowserRouter>
            <NavigationBar 
                user={user}
                onLoggedOut={() => {setUser(null)}}
            />
            <Row className="justify-content-md-center">
                <Routes>
                    <Route
                        path="/signup"
                        element={
                            <>
                                {user ? (
                                    <Navigate to="/" />
                                ) : (
                                    <Col md={5}>
                                        <SignupView />
                                    </Col>
                                )}
                            </>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <>
                                {user ? (
                                    <Navigate to="/" />

                                ) : (
                                    <Col md={5}>
                                        <LoginView onLoggedIn={(user) => setUser(user)} />
                                    </Col>
                                )
                            }
                            </>
                        }
                    />
                    <Route 
                        path="/movies/:movieId"
                        element={
                            <>
                            {!user ? (
                                <Col sm={8} md={5}>
                                <NoUserView
                                userData={(user, token) => {
                                    setUser(user); 
                                    setToken(token);
                                }}    
                                />
                                </Col>
                            ) : movies.length === 0 ? (
                                <>
                                    <Col>There is No Movie!</Col>
                                    <Col>
                                        <Button 
                                            variant="danger" 
                                            onClick={() => window.location.reload()}
                                        >
                                            Reload Page
                                        </Button>
                                    </Col>
                                </>
                            ) : (
                                <Col md={8}>
                                    <MovieView movies={movies} user={user} setUser={setUser}/>
                                </Col>
                            )
                            }
                        </>
                        }
                    />
                    <Route 
                        path="/profile"
                        element={
                        <>
                            {!user ? (
                                <Col sm={8} md={5}>
                                <NoUserView
                                userData={(user, token) => {
                                    setUser(user); 
                                    setToken(token);
                                }}    
                                />
                                </Col>
                            ) : (
                                <Col md={8}>
                                    <ProfileView user={user} token={token} movies={movies}/>
                                </Col>
                            )}
                        </>
                        }
                    />
                    <Route 
                        path="/"
                        element={
                            <>
                                {!user ? (
                                    <Col sm={8} md={5}>
                                    <NoUserView
                                    userData={(user, token) => {
                                        setUser(user); 
                                        setToken(token);
                                    }}    
                                    />
                                    </Col>
                                ) : movies.length === 0 ?(
                                    <>
                                        <Col>The list is empty</Col>
                                        <Col>
                                        <Button 
                                            variant="primary" 
                                            onClick={() => window.location.reload()}
                                        >
                                            Reload Page
                                        </Button>
                                        </Col>
                                    </>
                                ) : (
                                    <>
                                        {movies.map((movie) => (
                                            <Col
                                                className="mb-4" 
                                                key={movie.Id} 
                                                md={3}
                                            >
                                                <MovieCard movie={movie}/> 
                                            </Col>
                                        ))}
                                        <Col md={8} className="centeredContent"> 
                                            <Button className="addSpacing" onClick={() => onLoggedOut()}>Logout</Button>
                                        </Col>
                                    </>
                                )}
                            </>
                        }
                    />
                </Routes>
    {/*             
                { !user ? (
                    <Col sm={8} md={5}>
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
                    <>
                        <Col md={2}>
                            <div>The list isn't loading or your session is expired. Please try to log back in.</div>
                            <br/>
                            <Button className="addSpacing" onClick={() => {setUser(null); setToken(null); localStorage.clear();}}>Logout</Button>
                        </Col>
                    </>
                ) : (
                    <>
                        {movies.map((movie) => (
                                <Col key={movie.id} sm={8} md={6} lg={3}className="mb-4 mt-2">
                                    <MovieCard 
                                        movie={movie} 
                                        onMovieClick={(newSelectedMovie) => {
                                            setSelectedMovie(newSelectedMovie)
                                        }} 
                                    />
                                </Col>
                        ))}
                            <Col md={8} className="centeredContent"> 
                                <Button className="addSpacing" onClick={() => {setUser(null); setToken(null); localStorage.clear();}}>Logout</Button>
                            </Col>
                    </> 
                )} */}
            </Row>
        </ BrowserRouter>
    );
};