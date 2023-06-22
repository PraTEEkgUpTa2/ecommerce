import {React, useState} from 'react';
import  menFashion  from '../../CategoriesDetails/MenFashion';
import  womenFashion  from '../../CategoriesDetails/womenFashion';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navigation from '../../components/Navigation';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus } from '@fortawesome/free-solid-svg-icons';
import {faMinus } from '@fortawesome/free-solid-svg-icons';



function MensFashion() {

  const[fashionItems, setFashionItems] = useState(menFashion);
  const setDecrease = (idx) => {
    const updatedFashion = [...fashionItems];
    if (updatedFashion[idx].amount > 1) {
      updatedFashion[idx].amount -= 1;
    }
    setFashionItems(updatedFashion);
  };

  const setIncrease = (idx) => {
    const updatedFashion = [...fashionItems];
    if (updatedFashion[idx].amount < 10) {
      updatedFashion[idx].amount += 1;
    }
    setFashionItems(updatedFashion);
  };
  
  return (
  <>
  <Navigation />
  <div style={{ padding: '10px '}}>

  <h1 style={{ paddingBottom: '10px'}}>Men's Fashion</h1>
  <Row xs={1} md={4} className="g-2">
    {fashionItems.map((item,idx) => (
      <Col key={idx}>
      
      <Card style={{ width: '10rem' }}>
      <Card.Img  src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <div style={{ paddingLeft:'30px',display:'grid', gridTemplateColumns: 'auto auto auto'}}>
        
        <FontAwesomeIcon icon={faMinus} style={{ width:'20px', height:'30px', pointer:'cursor'}} onClick={() => setDecrease(idx)}/>
        <p style={{ border: '2px solid ' , width:'40px'}}>{item.amount}</p>
        <FontAwesomeIcon icon={faPlus} style={{ width:'20px', height:'30px'}} onClick={() => setIncrease(idx) } />
        
        </div>
        <Button style={{ width: '10rem '}}>Add to Cart </Button>
      </Card.Body>
    </Card>
      
    </Col>
    ))}
    </Row>
    </div>
    </>
  )
  
}

export default MensFashion