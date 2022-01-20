import React from 'react';
import ImageItem from './ImageItem';

const ImageList = ({images}) => {
const list = images.map((image, index) => {
  return (
    <ImageItem 
    key={index}
    url={image.url} 
    title={image.title}
    text={image.explanation}
    date={image.date}
    />
  )
})
  return (
  <div>
    {list}                                                                                                                               />
  </div>
  )
};

export default ImageList;
