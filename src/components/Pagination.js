import React,{useState} from 'react';
// import {forward,backward} from './TrendingMovies';
function Pagination({pageProp,forward,backward}) {

  return(<>
  <div className='w-full flex justify-center mb-8 '>
      <button className='p-2 border-2 border-lime-700 text-lime-700 font-bold rounded-l-xl'
       onClick={backward} 
       > Previous</button>
      <button className='p-2 border-2 border-lime-700 text-lime-700 font-bold bg-lime-200 '>{pageProp}</button>
      <button className='p-2 border-2 border-lime-700 text-lime-700 font-bold rounded-r-xl'
       onClick={forward}
       >
         Next</button>
  </div>
  </>);
}

export default Pagination;
