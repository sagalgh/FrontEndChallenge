import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { propTypes } from 'react-bootstrap/esm/Image';

const DateRange = (props) => {
  const handleEvent = (event, picker) => {
    // console.log("check",picker.startDate._d.toISOString().slice(0, 10))
    props.setFromDate(picker.startDate._d.toISOString().slice(0, 10));
    props.setToDate(picker.endDate._d.toISOString().slice(0, 10));
  };
  // console.log(props.fromDate, props.toDate, "from-to date")
  return (
  <div>
    <p>Choose Dates here:</p>
    
     <DateRangePicker
       ranges={props.fromDate - props.toDate}
       alwaysShowCalendars={true}
       onEvent={handleEvent}>
        <button>Click Me To Open Picker!</button>
      </DateRangePicker>
  </div>
  )
};

export default DateRange;
