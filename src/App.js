import React, { useState, useEffect } from "react";
import "./App.css";
import Details from './components/Details';
import Image from './components/Image';
import Header from './components/Header';
import axios from 'axios';
import styled from 'styled-components'


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
    <Container className="App">
      <Header />
     <h1>Astronomy Photo Of The Day</h1>
       <Image imgData = { data } />
     
       <Details details = { data } />
    </Container>
  );
}


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
border: 1px solid rgb(210, 210, 210);
border-radius: 16px;
position: relative;
min-height: 150px;
margin: 16px;
padding: 32px;

border-radius: 16px;
`

export default App;
