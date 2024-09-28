import { useState} from "react";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

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
        <h1>Welcome to My Flix!</h1>
        <button onClick={() => setSelectedUserView("login")}>Login</button>
        <p>or</p>
        <button onClick={() => setSelectedUserView("signup")}>Sign Up</button>
        </div>
    )
}