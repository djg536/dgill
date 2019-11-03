import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Card, Button, CardDeck } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import '../App.css';


const ref = React.createRef();

class Projects extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid style={{backgroundImage: "url(" + require("../assets/projects/1.jpg") + ")" }}>
          <Container style={{width: 'fit-content'}}>
            <h1>Projects</h1>
            <p>Here you'll find some of the things that I have been working on.<br/>
               Immerse yourself in this selection of my favourite works. Have fun!</p>
               <FontAwesomeIcon onClick={scrollButton} size="2x" style={{textAlign: 'center', margin: 'auto', display: 'block', cursor: 'pointer'}} icon={faChevronDown} />
          </Container>
        </Jumbotron>


        <Jumbotron ref={ref} fluid style={{backgroundImage: "url(" + require("../assets/projects/traincraft/2.jpg") + ")" }}>
          <Container>
            <h2>60km Long Traincraft Network</h2>
            <p>You'll be on the right track if you let off some steam on this Minecraft map.</p>
            <Link to="/projects/traincraft">
              <Button variant="primary btn-lg">Toot-toot!</Button>
            </Link>
          </Container>
        </Jumbotron>

        <Jumbotron fluid style={{backgroundImage: "url(" + require("../assets/projects/house/3.jpg") + ")" }}>
          <Container>
            <h2>Mobfield Manor Minecraft Survival Map</h2>
            <p>Put your survival skills to the test and see how long you can last out as your explore this long-abandoned mansion.</p>
            <Link to="/projects/house">
              <Button variant="danger">I dare to find out more</Button>
            </Link>
          </Container>
        </Jumbotron>


        <Jumbotron fluid style={{backgroundImage: "url(" + require("../assets/projects/minecraftcity/1.jpg") + ")" }}>
          <Container>
            <h2>Creeperville Minecraft City</h2>
            <p>A huge city map which has spent more than half a decade in the making.</p>
            <Link to="/projects/city">
              <Button variant="warning">Show me the money!</Button>
            </Link>
          </Container>
        </Jumbotron>        
       
        <CardDeck>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require("../assets/projects/asciistudio/1.jpg")} />
            <Card.Body>
              <Card.Title>ASCII Art Studio</Card.Title>
              <Card.Text>
                Convert images to beautiful ASCII art with this nifty tool.
              </Card.Text>
              <Link to="/projects/asciistudio">
                <Button variant="primary">Let's go!</Button>
              </Link>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require("../assets/projects/imageencryptor/1.jpg")} />
            <Card.Body>
              <Card.Title>Image Encryptor</Card.Title>
              <Card.Text>
                Hide secret messages in regular image files
              </Card.Text>
              <Link to="/projects/imageencryptor">
                <Button variant="primary">Go somewhere</Button>
              </Link>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require("../assets/projects/imageencryptor/1.jpg")} />
            <Card.Body>
              <Card.Title>'Yeezy Games' Software Engineering Project'</Card.Title>
              <Card.Text>
                A group project to design and build a game.
              </Card.Text>
              <a href="https://sites.google.com/york.ac.uk/yeezygames/home" target="_blank">
                <Button variant="primary">See more <FontAwesomeIcon icon={faExternalLinkAlt} /></Button>
              </a>
            </Card.Body>
          </Card>
        </CardDeck>

      </div>
    );
  }
}

const scrollButton = () =>
        ref.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

export default Projects;