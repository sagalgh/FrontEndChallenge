import React from 'react';
import { Form} from 'react-bootstrap';
const CheckBox = () => {
  return (
<Form>
  {['HD images','Video files', 'Concept Tags'].map((label) => (
    <div key={"checkbox"} className="mb-3">
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
