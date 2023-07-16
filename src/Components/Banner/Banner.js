import React, { useEffect,useState } from 'react'
import './Banner.css'
import axios from '../../Axios'
import {apiKey,imageUrl} from '../../Constants/Constants'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[0])
    })
  }, [])
  
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
    className='banner'>
        <div className='content'>
            <div className='title'>{movie ? movie.title:""}</div>
            <div className='bannerButtons'>
                <button className='button'>play button</button>
                <button className='button'>my list</button>

            </div>
           <h1 className='description'>{movie ? movie.overview : ""}</h1> 
           </div>
           <div className="fade"></div>

    </div>
  )
}

export default Banner