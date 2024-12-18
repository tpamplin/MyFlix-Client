import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
    

    
    return (

        <Link to={`/movies/${encodeURIComponent(movie.Id)}`}>
            <Card className="h-100">
                <Card.Img  variant="top" src={movie.Image} className="img-fluid"/>
                <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>{movie.Genre.Name}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
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