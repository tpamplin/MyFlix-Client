import React from "react";
import { useState } from "react";
import { Button, Modal} from "react-bootstrap";

export const ProfileDelete = ({username, token}) => {
    const [showModal, setShowModal] = useState(false);

    const handleDelete = (event) => {
        fetch(`http://ec2-44-211-131-121.compute-1.amazonaws.com/users/${username}`, 
            {
                method:"DELETE",
                headers:{
                    Authorization: `Bearer ${token}`
                }}
            ).then((response) => {
                if (response.ok){
                    alert("Account Deleted.");
                } else {
                    alert("Unable To Delete Account.")
                }

                localStorage.clear();
                window.location.reload();
            }
        )
    }

    return (
        <>
            <Button 
                onClick={() => setShowModal(true)} 
                variant="danger"
            >
                Delete Account
            </Button>

            <Modal 
                show={showModal} 
                onHide={() => setShowModal(false)}
            >
                
                <Modal.Header>
                    <Modal.Title>Delete Account</Modal.Title>
                </Modal.Header>

                <Modal.Body>Are You Sure?</Modal.Body>
                
                <Modal.Footer>
                    <Button 
                        onClick={() => setShowModal(false)}
                    >
                        No
                    </Button>
                
                    <Button 
                        variant="danger"
                        onClick={() => {
                            handleDelete();
                            setShowModal(false);
                        }}
                    >
                        Delete!
                    </Button>
                </Modal.Footer>
      
            </Modal>
        </>
    );

};