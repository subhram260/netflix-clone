import "./Banner.css";
import axios from '../Data/axios';
import requests from '../Data/request'
import { useState,useEffect } from "react";

function Banner() {
    const [movie,setMovie] = useState([]);
    useEffect(() => {
      async function fetchData(){
        const request=await axios.get(requests.fetchNetflixOriginals);
        // console.log(request)
        
    
        setMovie(
        request.data.results[Math.floor(Math.random() * request.data.results.length -1)]
      );

      return request;
      }
     fetchData();
    }, [])

    // console.log(movie)

    
    // console.log(movie?.backdrop_path)
    function Truncate(string,n){
        return string?.length>n ? string.substr(0,n-1)+'...':string;
    }
    return (
    <div>
      <header
        className="banner-img"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        //   backgroundPositionY:'bottom',
          

        }}
      >
        {/* <img className="banner-img" src="https://w.wallhaven.cc/full/nk/wallhaven-nkvz14.jpg" alt="banner_img"/> */}
        <div className="banner-content">
          <h1 className="movie-title">{movie?.title || movie?.name || movie?.original_name}</h1>
          <div className="button-play-mylist">
            <button className="button">Play</button>
            <button className="button">My List</button>
          </div>
          <p className="banner-description" >{Truncate(movie?.overview,150)}</p>
        </div>
      </header>
    </div>
  );
}
export default Banner;
