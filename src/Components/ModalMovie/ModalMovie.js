import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'

function ModalMovie({singleData,handleClose,show}) {
  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{singleData.title}</Modal.Title>
        </Modal.Header>
        <Image className='cardImg' variant="top" src={`https://image.tmdb.org/t/p/w300/${singleData.poster_path}`} />
        <Modal.Body>{singleData.overview}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default ModalMovie