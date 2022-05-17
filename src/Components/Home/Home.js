import React, { useEffect,useState } from 'react'
import { Container } from 'react-bootstrap'
import MovieList from '../MovieList/MovieList'

function Home() {

    const [movieData,setMovieData] = useState([])

    async function getData() {
        let url = process.env.REACT_APP_SERVER
        
        let response = await fetch(`${url}/trending`)
        let result = await response.json()
         
        
        setMovieData (result)
         

    }

    function updateMovie (newMovie, id){
      let updatedMovie = movieData.map(movieElement => {
        if (movieElement.id === id) {
          movieElement.myrate = newMovie.retComment
          return movieElement
        }
        else {
          return movieElement
        }
      })
      setMovieData(updatedMovie)
    }



    useEffect(()=> {
        getData()
    },[])

  return (
    <Container>
            {
                (movieData.length>0 )&& <MovieList data={movieData} updateMovie={updateMovie} />
            }
    </Container>
  )
}

export default Home