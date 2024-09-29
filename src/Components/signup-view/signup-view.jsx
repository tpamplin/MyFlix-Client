import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const SignupView = ({onBackClick}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        };

        fetch("https://myflix-timpamplin-021f285e4632.herokuapp.com/users", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if (response.ok) {
                alert("Signup successful!");
                window.location.reload();
            } else {
                alert("Signup failed.");
            }
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    minLength="3"
                />
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength="8"
                />
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

            </Form.Group>
            <Form.Group controlId="formBirthday">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Button onClick={onBackClick}>Back</Button>
        </Form>

        // <form onSubmit={handleSubmit}>
        //     <label>
        //         Username:
        //         <input 
        //             type="text"
        //             value={username}
        //             onChange={(e) => setUsername(e.target.value)}
        //             required
        //             minLength="3" 
        //         />
        //     </label>
        //     <label>
        //         Password: 
        //         <input 
        //             type="password"
        //             value={password}
        //             onChange={(e) => setPassword(e.target.value)}
        //             required
        //             minLength="8"
        //         />
        //     </label>
        //     <label>
        //         Email: 
        //         <input
        //             type="email"
        //             value={email}
        //             onChange={(e) => setEmail(e.target.value)}
        //             required
        //         />
        //     </label>
        //     <label>
        //         Birthday: 
        //         <input
        //             type="date"
        //             value={birthday}
        //             onChange={(e) => setBirthday(e.target.value)}
        //             required
        //         />
        //     </label>

        //     <button type="submit">Submit</button>
        //     <button onClick={onBackClick}>Back</button>
        // </form>
    );
};