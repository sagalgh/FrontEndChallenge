import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { propTypes } from 'react-bootstrap/esm/Image';

const DateRange = (props) => {
  const handleEvent = (event, picker) => {
    props.setFromDate(picker.startDate._d.toISOString());
    props.setToDate(picker.endDate._d.toISOString());
    console.log(props.fromDate, props.toDate, "range")
  };
  return (
  <div>
     <DateRangePicker
       ranges={props.fromDate - props.toDate}
       alwaysShowCalendars={true}
       onEvent={handleEvent}
      >
        <button>Click Me To Open Picker!</button>
      </DateRangePicker>
  </div>
  )
};

export default DateRange;
