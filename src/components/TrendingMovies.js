import React,{useState,useEffect} from 'react';
import axios from "axios";
import {Rings } from  'react-loader-spinner'
import Pagination from './Pagination';

function TrendingMovies() {
    const [movies,setMovies]=useState([])
    let [pageNumber,setPage]=useState(1);
    const [hover,setHover]=useState('')
    const[favourites,setFavourites]=useState([]);
    function forward(){
      setPage(pageNumber+1);
    }
    function backward(){
      if(pageNumber>1)
      setPage(pageNumber-1);
    }
    useEffect(function(){
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=be123f2143c3db08cca9a436df5a3436&page=${pageNumber}`)
        .then((res=>{
            console.table(res.data.results);
            setMovies(res.data.results);
            let oldFav=localStorage.getItem("imdb")
            oldFav=JSON.parse(oldFav) || [];
            setFavourites([...oldFav])
        }))
    },[pageNumber])
   
   let addToFav=(movie)=>{
      let newArr=[...favourites,movie]
      setFavourites([...newArr])
      console.log(newArr);
      localStorage.setItem("imdb",JSON.stringify(newArr))
    
    }
    let delFromFav=(movie)=>{
      let newArr=favourites.filter((m)=>m.id!=movie.id)
      setFavourites([...newArr])
      localStorage.setItem("imdb",JSON.stringify(newArr))
    }

    
  return <>
  <div className='mb-8'>
  <div className='mt-8 font-bold text-3xl text-lime-600 text-center mb-8'>Trending Movies</div>
  {
        movies.length===0?
    <div className='flex justify-center'> 
        <Rings
        heigth="100"
        width="100"
        color='rgb(101 163 13)'
        secondaryColor='green'
        ariaLabel='loading'
      />
      </div>:
 
 <div className='flex flex-wrap justify-center '>
  {
      movies.map((movie)=>(
<div className={`bg-[url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})] 
                  h-[25vh] w-[150px] md:h-[30vh] w-[250px] bg-cover flex items-end 
                  bg-center rounded-xl m-4 hover:scale-110 ease-out duration-300 
                  font-bold text-xl relative`} onMouseEnter={()=>setHover(movie.id)} 
                  onMouseLeave={()=>setHover('')}>
 {
         hover===movie.id && <> {!favourites.find((m) => m.id==movie.id )? <div className='absolute top-2 right-2 p-2 bg-gray-800 rounded-xl text-xl 
         cursor-pointer' onClick={()=>addToFav(movie)}>⭐ </div> :<div className='absolute top-2 right-2 p-2 bg-gray-800 rounded-xl text-xl 
         cursor-pointer' onClick={()=>delFromFav(movie)}>❌ </div>
 }</>
}

      <div className='bg-gray-900 text-white font-bold p-2 w-full text-center  rounded-b-xl ' >{movie.title}</div>
  </div>
      ))
  }
  </div>

}

  </div>
  <Pagination pageProp={pageNumber} forward={forward} backward={backward}/>
  </>;
}

export default TrendingMovies;
