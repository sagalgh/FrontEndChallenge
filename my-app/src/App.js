
import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import InputForm from './components/Form';
import SelectDate from './components/SelectDate';
import DateRange from './components/DateRange';
import CheckBox from './components/CheckBox';

function App() {
  const[image, setImage]= useState({});
  const[search, setSearch]= useState("");
  const[startDate,setStartDate]= useState("");
  const[fromDate, setFromDate]= useState('');
  const[toDate, setToDate]= useState('');
  // useEffect(()=>{
  //   if(search){
  //     const url= ``
  //   }
  // })
  return (
    <div className="App">
      <Navbar />
      <InputForm />
      <DateRange 
      fromDate={fromDate}
      setFromDate={setFromDate}
      toDate={toDate}
      setToDate={setToDate} 
      />
      <SelectDate
      startDate={startDate}
      setStartDate={setStartDate} 
      />
      <CheckBox />
    </div>
  );
}

export default App;
