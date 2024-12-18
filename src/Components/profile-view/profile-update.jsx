import { React, useState} from "react";
import { Button, Modal, Form} from "react-bootstrap";

export const ProfileUpdate = ({ user , token }) => {

    const [showModal, setShowModal] = useState(false)

    const [username, setUsername] = useState(user.Username),
          [password, setPassword] = useState(""),
          [email, setEmail] = useState(user.Email),
          [birthday, setBirthday] = useState(user.Birthday);

    const handleSubmit = (event) => {
        event.preventDefault(); 
    
        const data = {
            Username: username,
            ...(password && {Password: password}), 
            Email: email,
            Birthday: birthday,
        };
        
        fetch(`https://myflix-timpamplin-021f285e4632.herokuapp.com/users/${username}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if (response.ok) {
                alert("Profile Updated!");
                response.json().then((updatedUser) => {
                    localStorage.setItem("user", JSON.stringify(updatedUser));
                    window.location.reload();
                });
            } else {
                alert("Profile update failed.")
            }
        });
    };

    return(
        <>
            <Button
                onClick={() => setShowModal(true)}
                variant="secondary"
            >
                Update Profile
            </Button>
        
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header>Update Profile Information</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="updateUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            minLength={5}
                        />
                    </Form.Group>

                    <Form.Group controlId="updatePassword">
                        <Form.Label>Password (leave blank to remain the same)</Form.Label>
                        <Form.Control 
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            minLength={8}
                        />
                    </Form.Group>
                    
                    <Form.Group controlId="updateEmail">
                        <Form.Label>Email</Form.Label> 
                        <Form.Control 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        /> 
                    </Form.Group>        
                    
                    <Form.Group controlId="updateBirthday">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control 
                            type="date"
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button variant="secondary" type="submit">Submit</Button>
                </Form>
            </Modal.Body>
        </Modal>
        
        </>
    )

}