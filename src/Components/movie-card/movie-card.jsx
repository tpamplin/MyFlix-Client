import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick}) => {
    return (
        <div onClick={() => {
            onMovieClick(movie);
        }}
        >
            {movie.Title}
        </div>
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