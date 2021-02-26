import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'
import car from '../assets/img/car.jpg'
import styled from 'styled-components'  


const Styles = styled.div`
    .jumbo{
        background: url(${car}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef
        height: 400px;
        position: relative; 
        z-index: -2 
    }
    .overlay{
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1
    }
`



const Jumbotron = () => {
    return (
        <Styles>
        <Jumbo fluid className="jumbo" >
                 <div className="overlay"></div>
                 <Container>
                     <h1> Devarrrt </h1>
                     <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsa in veniam consequuntur eaque obcaecati unde ratione, autem ea mollitia reiciendis eius nam est enim ab iste! Possimus eaque neque beatae est, nihil qui excepturi illo esse, ab iure repudiandae?
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsa in veniam consequuntur eaque obcaecati unde ratione, autem ea mollitia reiciendis eius nam est enim ab iste! Possimus eaque neque beatae est, nihil qui excepturi illo esse, ab iure repudiandae?
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsa in veniam consequuntur eaque obcaecati unde ratione, autem ea mollitia reiciendis eius nam est enim ab iste! Possimus eaque neque beatae est, nihil qui excepturi illo esse, ab iure repudiandae?
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                     <h2>  Possimus eaque </h2>
                     Quaerat ipsa in veniam consequuntur eaque obcaecati unde ratione, autem ea mollitia reiciendis eius nam est enim ab iste! Possimus eaque neque beatae est, nihil qui excepturi illo esse, ab iure repudiandae?
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsa in veniam consequuntur eaque obcaecati unde ratione, autem ea mollitia reiciendis eius nam est enim ab iste! Possimus eaque neque beatae est, nihil qui excepturi illo esse, ab iure repudiandae?
                     </p>
                 </Container>
             </Jumbo>
         </Styles>
    )
}



export default Jumbotron
