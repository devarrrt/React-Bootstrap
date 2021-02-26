import React from 'react'
import Slider from '../Slider'
import Cards from '../Cards'
import { Container } from 'react-bootstrap'
import Jumbotron from '../Jumbotron'
import Footer from '../Footer'




const Home = () => {
    return (
        <div>
            <Slider />
            <Container style={{ padding: '25px' }} >
                <Cards />
            </Container>
            <Jumbotron />
            <Container>
                <Footer/>
            </Container>
        </div>
    )
}

export default Home
