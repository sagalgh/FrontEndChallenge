import React from 'react';
import DatePicker from "react-datepicker";

const SelectDate = (props) => {
  console.log (props.startDate, "startDate")
  return (
    <div>
      <h1>Please Select Specific Date</h1>
    <DatePicker
    selected={props.startDate}
     onChange={(date) => props.setStartDate(date)} 
     />
     </div>
  )
};

export default SelectDate;
