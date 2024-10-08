import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick}) => {
    return (

        <Card className="h-100" onClick={() => onMovieClick(movie)}>
            <Card.Img  variant="top" src={movie.Image} className="img-fluid"/>
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Genre.Name}</Card.Text>
            </Card.Body>
        </Card>
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