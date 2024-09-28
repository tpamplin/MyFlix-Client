import { useState } from "react";

export const LoginView = ({onLoggedIn, onBackClick}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            Username: username,
            Password: password
        };



        fetch("https://myflix-timpamplin-021f285e4632.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
        .then((data) =>{
            console.log("Login response: ", data);
            if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("token", data.token);
                onLoggedIn(data.user, data.token);
            }else {
                alert('No such user')
            }
        })
        .catch((e) => {
            alert('Something went wrong.');
        });
    };
   
   
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span>Username: </span>
                <input 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    minLength="8"
                    required
                />
            </label>
            <label>
                <span>Password: </span>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength="8"
                    required
                />
            </label>
            <button type="submit">Submit</button><br />
            <button onClick={onBackClick}>Back</button>
        </form>
    );
};