import React from 'react'
import { Row } from 'react-bootstrap'
import Movie from '../Movie/Movie'

function MovieList({data}) {

  return (
    <Row>
    {
        data.map( (singleData) => { return ( <Movie singleData={singleData} key ={singleData.id}/> )})
    }
    </Row>
  )
}

export default MovieList