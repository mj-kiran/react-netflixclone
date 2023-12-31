import React,{useEffect,useState} from 'react'
import './Rowposter.css'
import axios from '../../Axios'
import Youtube from 'react-youtube'
import{imageUrl,apiKey}from '../../Constants/Constants'

function Rowpost(props) {
  const [movies, setMovies] = useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log("orginals",response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      // alert('Network error')
    })
  }, [])
  const opts={
    height:'390',
    width:'100%',
    playerVars:{
      autoplay:1,
    }
  }
  const handleMovie=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`).then((response)=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }
      else{
        console.log('Array empty');
      }
    })
  }  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="post" />

          )}

        </div>
        {
        urlId && <Youtube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default Rowpost