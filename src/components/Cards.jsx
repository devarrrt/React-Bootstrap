import React from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap' 
import car from '../assets/img/car.jpg'



const Cards = () => {
    return (
       <Row>
           <Col style={{ display: 'flex', justifyContent:'space-between' }} >
           <Card style={{ padding: '30px 0', margin: '10px', width: '300px' }}> 
                <Card.Img variant="top" src={car}  />
                <Card.Body>
                    <Card.Title> React Developer epta </Card.Title>
                    <Card.Text> Hello hello hello </Card.Text>
                    <Button variant='primary' > Learn more hello </Button>
                </Card.Body>
           </Card>
           <Card style={{ padding: '30px 0',  margin: '10px',  width: '300px' }}> 
                <Card.Img variant="top" src={car}  />
                <Card.Body>
                    <Card.Title> React Developer epta </Card.Title>
                    <Card.Text> Hello hello hello </Card.Text>
                    <Button variant='primary' > Learn more hello </Button>
                </Card.Body>
           </Card>
           <Card style={{ padding: '30px 0', margin: '10px', width: '300px' }}> 
                <Card.Img variant="top" src={car}  />
                <Card.Body>
                    <Card.Title> React Developer epta </Card.Title>
                    <Card.Text> Hello hello hello </Card.Text>
                    <Button variant='primary' > Learn more hello </Button>
                </Card.Body>
           </Card>
           </Col>
       </Row>
    )
}

export default Cards
