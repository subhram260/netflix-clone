import axios from '../Data/axios'
import React,{useState,useEffect} from 'react'
import './Row.css'

function Row({title,fetchURL}) {
    const baseURL = "http://image.tmdb.org/t/p/original/"
    const [movies, setmovies] = useState([])
    useEffect(()=>{

        async function fetchData(){
            const request=await axios.get(fetchURL)
            setmovies(request.data.results);
            return request;
        }
        fetchData()
        
    },[fetchURL])
    
    console.log(movies)

  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='row-img-group'>
            {movies.map(movie=><img className='row-img' key={movie.id} src={`${baseURL}${movie.poster_path}`} alt=''/>)}
        </div>
    </div>
  )
}

export default Row