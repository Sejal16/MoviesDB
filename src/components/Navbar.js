import React from 'react';
 import {Link} from 'react-router-dom'
 let img=["https://bevouliin.com/wp-content/uploads/2014/02/movie-camera-video-cut-board-logo-template-preview-bevouliin.jpg"]
function Navbar() {
  return <>
  <div className=" border border-lime-700  pl-12 flex space-x-8 items-center py-2">
  <img className=' w-[50px] md:w-[80px]' src={img[0]} alt='Logo' /> 
  <Link to="/" className="text-lime-600 font-bold text-xl md:text-3xl">MoviesDB</Link>
  <Link to="/Favourites" className="text-lime-600 font-bold text-xl md:text-3xl">Favourites</Link>
  </div>
  </>
}

export default Navbar;
