import React,{useState,useEffect} from 'react';
import axios from "axios";
import {Rings } from  'react-loader-spinner'


function Banner() {
  const [movie,setMovie]=useState({})
  useEffect(function(){
      axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=be123f2143c3db08cca9a436df5a3436")
      .then((res=>{
          console.table(res.data.results);
          setMovie(res.data.results[1]);
      }))
  },[])
  return <>
  {
      movie.length===0?
      <div className='flex justify-center'> 
          <Rings
          heigth="100"
          width="100"
          color='rgb(101 163 13)'
          secondaryColor='green'
          ariaLabel='loading'
        />
      </div>: 
      <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[40vh]  md:h-[80vh] bg-cover bg-center flex items-end `}>
        <div className='text-xl md:text-4xl text-white font-bold p-2 bg-gray-900 bg-opacity-50 w-full text-center'>{movie.title}</div>
      </div>

  }
  </>;
}

export default Banner;
