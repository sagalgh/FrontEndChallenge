import React,{useState} from 'react';
import { Card} from 'react-bootstrap';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageItem = (props) => {
  const [likedImage, setLikedImage] = useState(false)
  return (

<Card border="dark" style={{ width: '40rem', marginTop: "50px", marginLeft: '400px'}}>
  <Card.Img variant="top" src={props.url} />
  <Card.Body>
    <Card.Title style={{display:"flex", justifyContent:"center"}}>{props.title}</Card.Title>
    <Card.Text>
      {props.text}
    </Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted">{props.date}
  <FontAwesomeIcon onClick={()=> setLikedImage(!likedImage)} style={{marginLeft:"500px"}} icon={faHeart} color={likedImage? 'red': 'grey'}/>
  </Card.Footer>
</Card>
 

  )
};

export default ImageItem;
