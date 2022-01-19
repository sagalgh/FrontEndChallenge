import React from 'react';
import CounterInput from 'react-bootstrap-counter';
import "../global.scss";
const NumOfImages = (props) => {
  return (
   
    <CounterInput
    value={0}
    min={1}
    max={100}
    glyphPlus={{ glyph: "fa fa-plus", position: "left" }}
    glyphMinus={{ glyph: "fa fa-minus", position: "right" }}
    onChange={(count) => {
      props.setCount(count);
    }}
  />

  )
};

export default NumOfImages;
