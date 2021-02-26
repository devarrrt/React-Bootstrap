import React from 'react'
import { Row, Col } from 'react-bootstrap'
import most from '../assets/img/most.jpg'


const Footer = () => {
    return (
        <Row style={{ padding: '30px 0' }}>
            <Col md={6}>
                <h3> Devarrrt </h3> 
          <p> 
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum voluptatem iste sunt sint quae aperiam? Facere illo corporis hic sed? Rerum, perspiciatis doloribus alias iusto quae tempora excepturi odio at dolore amet, enim deleniti optio fugit eveniet consequuntur voluptatem dolorem reprehenderit. Sapiente nesciunt, accusantium temporibus consequatur molestiae eos iusto nisi commodi voluptatem nobis libero minima aut suscipit dignissimos facilis id ex illum tempore atque quisquam harum corrupti. Provident voluptatum, vel molestias ut qui maiores odit architecto? Porro aperiam, distinctio perferendis harum quae excepturi et consequuntur eos? At quibusdam quia sunt?
          </p>
            </Col>
            <Col md={5}>
                <img src={ most } alt="img" height={ 400 } />
            </Col>
        </Row>
    )
}



export default Footer
