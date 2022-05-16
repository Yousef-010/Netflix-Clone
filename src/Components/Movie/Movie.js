import React, { useState } from 'react'
import ModalMovie from '../ModalMovie/ModalMovie'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import './Movie.css'
import { Col } from 'react-bootstrap';

function Movie({singleData}) {
    const [isShowen,setIsShowen]=useState(false)
    const handelShow  = () => {
        setIsShowen(true)
    }

    const handleClose =()=>{
        setIsShowen(false)
    }
  return (
    <Col>

        
        <Card   style={{ width: '22rem' }}>
        <Card.Img className='cardImg' variant="top" src={`https://image.tmdb.org/t/p/w200/${singleData.poster_path}`} />
        <Card.Body>
            <Card.Title>{singleData.title}</Card.Title>
            <Card.Text>
            {singleData.overview}
            </Card.Text>
            <Button variant="info" onClick={handelShow} >Add TO FavList</Button>
        </Card.Body>
        </Card>
        {
            singleData && < ModalMovie singleData={singleData} show={isShowen} handleClose={handleClose} />
        }

    </Col>
  )
}

export default Movie