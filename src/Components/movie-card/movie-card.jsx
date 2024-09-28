import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick}) => {
    return (

        <Card onClick={() => onMovieClick(movie)}>
            <Card.Img variant="top" src={movie.Image} />
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Genre.Name}</Card.Text>
            </Card.Body>
        </Card>

        // <div onClick={() => {
        //     onMovieClick(movie);
        // }}
        // >
        //     {movie.Title}
        // </div>
    );
};

MovieCard.propTypes = { 
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        Image: PropTypes.string,
        Featured: PropTypes.bool,
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Bio: PropTypes.string,
            Birth: PropTypes.string
        }),
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string
        }).isRequired
    }).isRequired
};