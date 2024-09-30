import Button from "react-bootstrap/Button";

export const MovieView = ({ movie, onBackClick }) => {
    return (
        <div >
            <div className="centeredContent">
                <span>
                    <h2>{movie.Title}</h2>
                </span>
            </div>
            <div className="primary centeredContent">
                <img src={movie.Image}/>
            </div>
            <div>
                <span className="centeredContent addSpacing">{movie.Description}</span>
            </div>
            <div className="addSpacing">
                <span className="centeredContent">Director: </span>
                <span className="centeredContent">{movie.Director.Name}</span>
            </div>
            <div className="addSpacing">
                <span className="centeredContent">Genre: </span>
                <span className="centeredContent">{movie.Genre.Name}</span>
            </div>
            <div className="centeredContent">
                <Button 
                    className="primary addSpacing" 
                    onClick={onBackClick} 
                >
                Back
                </Button>
            </div>
        </div>
    );
};

