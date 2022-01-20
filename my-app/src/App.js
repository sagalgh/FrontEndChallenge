
import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import DateRange from './components/DateRange';
import ImageList from './components/ImageList'
import axios from 'axios'

function App() {
  const[images, setImages]= useState([]);
  const[error,setError]= useState(false)
  const[fromDate, setFromDate]= useState('');
  const[toDate, setToDate]= useState('');
  useEffect(()=>{
    let url= `https://api.nasa.gov/planetary/apod?api_key=xYb15iHy7g4r1SXH3IGbWTsnxb63HXfwzEObtYsh`
      let queryparam = `&start_date=${fromDate}&end_date=${toDate}`
      axios
      .get(fromDate? url + queryparam: url)
      .then((response)=>{
        if(!Array.isArray(response.data)){
          response.data=[response.data]
          }
        setImages(response.data)
      })
      .catch((error) => {
        setError(true)
      })
      
  },[fromDate,toDate])
  
  return (
    <div className="App">
      <Navbar />
      <DateRange 
      fromDate={fromDate}
      setFromDate={setFromDate}
      toDate={toDate}
      setToDate={setToDate} 
      />
      <ImageList images={images}/>
    </div>
  );
}

export default App;
