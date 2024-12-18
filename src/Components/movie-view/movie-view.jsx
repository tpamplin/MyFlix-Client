import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { FavoriteButton} from "../favorite-button/favorite-button";


export const MovieView = ({ movies, user, setUser}) => {
    const { movieId } = useParams();
    const movie = movies.find((m) => m.Id === movieId);

    return (
        <div>
            <div className="centeredContent">
                <span>
                    <h2>{movie.Title}</h2>
                </span>
            </div>
            <div className="primary centeredContent">
                <img src={movie.Image}/>
            </div>
            <div className="centeredContent addSpacing">
                <FavoriteButton movie={movie} user={user} setUser={setUser}/>
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
                <Link to="/">
                    <button className="back-button">Back</button>
                </Link>
            </div>
        </div>
    );
};

