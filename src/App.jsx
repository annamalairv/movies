import React, { useEffect,useState } from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer";
import MovieCard from "./components/card"
import Modal from 'react-awesome-modal';




// Apikey: 1e448e0dfcdbb565f5d329820065b4d2
const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=1e448e0dfcdbb565f5d329820065b4d2";
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=<<api_key_here>>&query";

function App  () {
  let arr=[1,2,3,4,5]
  const [movies, setMovies]=useState([]);
  const [query, setQuery]=useState('');


  useEffect(() => {
    debugger
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
   
  }, [])
  useEffect(()=>{
if(query!=""){
  console.log(query,"query>>");
  searchMovie();
}
else{
  allMovie()
}
  },[query])

  const searchMovie = ()=>{
  

   
      const url=`https://api.themoviedb.org/3/search/movie?api_key=1e448e0dfcdbb565f5d329820065b4d2&query=${query}`;
      fetch(url)
      .then((res)=>res.json())
    .then(data=>{
      console.log(data,"json123");
      setMovies(data.results);
    })
    

  }
  const allMovie = ()=>{
    fetch(API_URL)
    .then((res)=>res.json())
  .then(data=>{
    console.log(data,"json123");
    setMovies(data.results);
  })
  
  }
  const[open,setOpen]=useState(false)
  const closeModal=()=>{
    setOpen(false);
  }
  return (
    <section
      className="h-full bg-[#edf5f7] "
     
    >
      <Navbar setQuery={setQuery} setopen={setOpen} />
      <div className="grid gap-1 lg:grid-cols-3 px-24">
      {movies.map((moviereq)=> <MovieCard key={moviereq.id}{...moviereq}/>)
      }
      </div>
      
      <div style={{position:"relative"}}><Footer /></div>
      <Modal 
                    visible={open}
                    width="400"
                    height="300"
                    effect="fadeInUp"
                   
                >
                   <div className='bg-[#ffffff] flex flex-col justify-center'>
                   <div className="bg-[#9352B3] w-full  ">
                   <div className='flex flex-row text-gray-400 py-2'>
                   <h2 className='text-2xl dark:text-white font-bold text-end items-center  ml-40'>SIGN IN <span onClick={closeModal} className="ml-14 "> X</span></h2>
               
                </div>

      </div>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-[#ffffff] p-8 px-8'>
    
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Username</label>
                    <input className='rounded-lg bg-[#fffff] mt-2 p-2 focus:border-blue-500 focus:bg-[#ffffff]0 outline' type="text" />
                </div>
                <div className='flex flex-col text-gray-400 py-2'>
                    <label>Password</label>
                    <input className='rounded-lg bg-[#fffff] mt-2 p-2 focus:border-blue-500 focus:bg-[#ffffff]0 outline' type="password" />
                </div>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                  
                </div>
                <button className='w-50 my-3 py-2 px-4 bg-[#9352B3] shadow-lg text-white font-semibold rounded-lg'>SIGN IN</button>
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'> Not a member?<span className="text-[#9352B3]">sign Up</span></p>
                    <p className="text-[#9352B3]">Forgot Password</p>
                </div>
                
            </form>
        </div>
                </Modal>
      
  
    </section>
  );
};

export default App;
