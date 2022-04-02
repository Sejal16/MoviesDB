import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TrendingMovies from './components/TrendingMovies';
import Pagination from './components/Pagination';
import Favourites from './components/Favourites';
import {BrowserRouter,Routes,Route}  from 'react-router-dom'
function App() {
  return (
   <BrowserRouter>
   <Navbar></Navbar>
   <Routes>
     <Route path ="/" element={<><Banner/><TrendingMovies/></>}/>
     <Route path ="/Favourites" element={<><Favourites/></>}/>
   </Routes>
   {/* <Banner></Banner>
  //  <TrendingMovies></TrendingMovies>
  //  <Pagination></Pagination> */}
   </BrowserRouter>
  );
}

export default App;
