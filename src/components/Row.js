import React,{useEffect} from 'react'
import { getMovies } from '../api';
import './row.css'
// rcfe
const imageHost="https://image.tmdb.org/t/p/original/";
export function Row({title,path}) {
    const [movies,setMovies]= React.useState([]);
    const fetchMovies = async(_path)=>{
        try{
            const data = await getMovies(_path);
            console.log(data)
            setMovies(data?.results)
        }catch(error){
            console.log("deu erro no fatch movies : ",error);
        }
    }
    // useEffect(() => {
    //     //faz alguma coisa
    //   return () => {
    //       //faz alguma coisa quando for destruido
        
    //     };
    // }, [])
    useEffect(()=>{
        fetchMovies(path);
    },[path])
    return (  
        <div className='row-container'>
            <h2 className='header'> {title}</h2>
            <div className='row-cards'>
                {movies?.map(movie=>{
                    return(
                        <img className="movie-image" key={movie.id} src={`${imageHost}${movie.poster_path}`} alt={movie.name}/>
                    )
                })}
            </div>
        </div>
  )
}
