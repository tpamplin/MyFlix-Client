import { Link } from "react-router-dom";

export const ProfileView = ({ user }) =>{

    return (
        <div >
            <div className="centeredContent">
                <span>
                    <h4>Username: {user.Username}</h4>
                </span>
            </div>
            <div className="centeredContent">
                <span>
                    <h5>Email: {user.Email}</h5>
                </span>
            </div>
            <div className="centeredContent">
                <Link to="/">
                    <button className="back-button">Back</button>
                </Link>
            </div>
        </div>
    );
}