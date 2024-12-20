import { MovieCard } from "../movie-card/movie-card"

export const MovieFilter = ( movies ) => {


    return(
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

    )

}