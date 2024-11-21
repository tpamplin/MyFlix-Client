import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./profile-view.scss"

export const ProfileView = ({ user, movies}) =>{

    const favoriteMovies = movies.filter(m => user.Favorites.includes(m.Id));

    return (
        <>
        <Row>
            <Col className="centeredContent">
            <h1>Profile</h1>
            </Col>
        </Row>
        <Row>
            <Col className="centeredContent">
                <span>
                    <h4>Username: {user.Username}</h4>
                </span>
            </Col>
            <Col className="centeredContent">
                <span>
                    <h5>Email: {user.Email}</h5>
                </span>
            </Col>
        </Row>
        <Row>
            <Col className="centeredContent">
            <h3>Favorite Movies</h3>
            </Col>
        </Row>
        <Row>
            <Col className="centeredContent">
            <table>
                <tr>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Link</th>
                </tr>
                {movies.map((movie) => (
                    <tr key={movie.Id} >
                        <td>{movie.Title}</td>
                        <td><img src={movie.Image} height="150"/></td>
                        <td><Link to={`/movies/${encodeURIComponent(movie.Id)}`}>Go To Movie</Link></td>
                    </tr>
                    ))}
            </table>
            </Col>
        </Row>
        <Row>
        <Col className="centeredContent">
                <Link to="/">
                    <button className="back-button">Back</button>
                </Link>
            </Col>
        </Row>
        </>
);
} 