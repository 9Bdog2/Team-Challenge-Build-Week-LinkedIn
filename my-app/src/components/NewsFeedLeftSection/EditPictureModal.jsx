import React from 'react'
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function EditPictureModal() {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    
    return (
        <>
            <Button className="follow" variant="outline-primary" size="sm" onClick={handleShow}>
        Edit Profile Picture
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}
