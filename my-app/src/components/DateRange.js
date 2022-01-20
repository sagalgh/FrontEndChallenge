import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';

const DateRange = (props) => {
  const handleEvent = (event, picker) => {
    props.setFromDate(picker.startDate._d.toISOString().slice(0, 10));
    props.setToDate(picker.endDate._d.toISOString().slice(0, 10));
  };
  return (
  <div className='date-range'>
    <h4>Browse photos from different dates</h4>
     <DateRangePicker
       ranges={props.fromDate - props.toDate}
       alwaysShowCalendars={true}
       onEvent={handleEvent}>
        <button>Choose Dates here</button>
      </DateRangePicker>
  </div>
  )
};

export default DateRange;
