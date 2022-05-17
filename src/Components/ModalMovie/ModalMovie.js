import React, {useRef} from 'react'
 
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'
import { Form } from 'react-bootstrap'

function ModalMovie({singleData,handleClose,show,updateMovie}) {

  let comment = useRef()

  function handleComment (e){
    e.preventDefault()
    let retComment = comment.current.value
    
    let newMovie = {...singleData, retComment}
    updateMovie(newMovie,newMovie.id)
  }

  async function handleAddToFav (e,singleData){
    e.preventDefault()
    let url = `${process.env.REACT_APP_SERVER}/addMovie`
    let data = {
      title :singleData.title,
      myrate :singleData.myrate
    }
    let response = await fetch(url,{
      method : 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(data)
    })
    
     
    if (response.status === 201 ) {alert('success added Fav List')}
    
  }




  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{singleData.title}</Modal.Title>
        </Modal.Header>
        <Image className='cardImg' variant="top" src={`https://image.tmdb.org/t/p/w300/${singleData.poster_path}`} />
        <Modal.Body>{singleData.overview}
        {/* changes here  */}
        <br/>
        <hr/>
        <h4> COMMENT: 
          {
            singleData.myrate ? singleData.myrate : 'No Comment Added'
          }
        </h4>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Add Comment : </Form.Label>
              <Form.Control
                ref={comment}
                type="text"
                placeholder="Type your comment here"
              />
               
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={(e) => handleComment(e)} 
              >Send comment</Button>
            <Button  style={{float:'right'}}
              variant="success"
              type="submit"
              onClick={(e) => handleAddToFav(e, singleData)}
            >
              Add to favorite
            </Button>
          </Form>
          {/* changes here  */}
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
           


        </Modal.Footer>
      </Modal>
  )
}

export default ModalMovie