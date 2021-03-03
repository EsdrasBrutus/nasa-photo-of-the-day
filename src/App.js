import React, { useState, useEffect } from "react";
import "./App.css";
import Details from './components/Details'
import Image from './components/Image'
import axios from 'axios';


const BASE_URL = 'https://api.nasa.gov/planetary/apod?'
const API_KEY = 'sLMfHKrm7OOSZUACC4ykI8SrCpOPJjaUIJ0BgTLv'

function App() {
  const [data, setData] = useState({})

  useEffect(()=>{
    axios.get(`${BASE_URL}api_key=${API_KEY}`)
    .then(({ data }) =>{ 
      console.log(data)
      setData(data)
    } )
    .catch(err => console.log(err))
  }, [])
  
  
  
  return (
    <div className="App">
     <h1>Astronomy Photo Of The Day</h1>
     {
       <Image imgData = { data } />
     }
    </div>
  );
}

export default App;
