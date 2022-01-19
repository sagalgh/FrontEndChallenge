import React from 'react';
import { Form} from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
const CheckBox = (props) => {
  const handleEvent = function(){
    props.setFilter(true)
  } 
  console.log(props.filter, "filter NEW")
  return (
<Form onChange={handleEvent}>
  {['HD images','Video files', 'Concept Tags'].map((label, index) => (
    <div key={index} className="mb-3">
      <Form.Check 
        type={"checkbox"}
        id={`default-${"checkbox"}`}
        label={`${label}`}
      />
      
    </div>
  ))}
</Form>
  )
};

export default CheckBox;
