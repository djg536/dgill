import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Button } from 'react-bootstrap';

import '../App.css';

class Minecraft extends Component {
  render() {
    return (
      <div>

        <Jumbotron fluid style={{backgroundImage: 'url(' + require('../assets/minecraft/traincraft/10.jpg') + ')' }}>
          <Container>
            <h1>60km Long Traincraft Network</h1>
            <p>You'll be on the right track if you let off some steam on this Minecraft map.</p>
            <Link to='/minecraft/traincraft'>
              <Button variant='primary btn-lg'>Toot-toot!</Button>
            </Link>
          </Container>
        </Jumbotron>

        <Jumbotron fluid style={{backgroundImage: 'url(' + require('../assets/minecraft/house/3.jpg') + ')' }}>
          <Container>
            <h1>Mobfield Manor Minecraft Survival Map</h1>
            <p>Put your survival skills to the test and see how long you can last out as your explore this long-abandoned mansion.</p>
            <Link to='/minecraft/house'>
              <Button variant='danger btn-lg'>I dare to find out more</Button>
            </Link>
          </Container>
        </Jumbotron>

        <Jumbotron fluid style={{backgroundImage: 'url(' + require('../assets/minecraft/minecraftcity/1.jpg') + ')' }}>
          <Container>
            <h1>Creeperville Minecraft City</h1>
            <p>A huge city map which has spent more than half a decade in the making.</p>
            <Link to='/minecraft/city'>
              <Button variant='warning btn-lg'>Show me the money!</Button>
            </Link>
          </Container>
        </Jumbotron>         

        <Jumbotron fluid style={{backgroundImage: 'url(' + require('../assets/minecraft/london/1.jpg') + ')' }}>
          <Container>
            <h1>Minecraft London</h1>
            <p>London recreated with blocks.</p>
            <Link to='/minecraft/london'>
              <Button variant='success btn-lg'>Mind the gap</Button>
            </Link>
          </Container>
        </Jumbotron>         

      </div>
    );
  }
}

export default Minecraft;