import React, { useEffect,useState } from 'react'
import { Container } from 'react-bootstrap'
import MovieList from '../MovieList/MovieList'

function Home() {

    const [movieData,setMovieData] = useState([])

    async function getData() {
        let url = 'https://movies-dbb.herokuapp.com'
        
        let response = await fetch(`${url}/trending`)
        let result = await response.json()
         
        
        setMovieData (result)
         

    }

    useEffect(()=> {
        getData()
    },[])

  return (
    <Container>
            {
                (movieData.length>0 )&& <MovieList data={movieData} />
            }
    </Container>
  )
}

export default Home