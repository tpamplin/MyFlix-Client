import { useState} from "react";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import Button from "react-bootstrap/Button"

export const NoUserView = ({userData}) => { 

    const [selectedUserView, setSelectedUserView] = useState(null);

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    if (selectedUserView === "login") {
        return <LoginView 
        onLoggedIn={(user, token) => {
            setUser(user); 
            setToken(token);
            userData(user, token);
            }}
        onBackClick={() => setSelectedUserView(null)}
        />;
    }

    if (selectedUserView === "signup") {
        return <SignupView
            onBackClick={() => setSelectedUserView(null)}
        />;
    }

    return (
        <div>
            <div className="centeredContent">
                <h1>Welcome to MyFlix!</h1>
            </div>
            <div className="centeredContent">
                <Button className="primary" onClick={() => setSelectedUserView("login")}>Login</Button>
            
            </div>
            <div className="centeredContent">
                <p>or</p>
            </div>
            <div className="centeredContent">
                <Button className="primary" onClick={() => setSelectedUserView("signup")}>Sign Up</Button>
            </div>
        </div>
    )
}