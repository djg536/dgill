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
        <Jumbotron fluid style={{backgroundImage: 'url(' + require('../assets/projects/1.jpg') + ')' }}>
          <Container style={{width: 'fit-content'}}>
            <h1>Projects</h1>
            <p>Here you'll find some of the things that I have been working on.<br/>
               Have fun exploring!</p>
               <FontAwesomeIcon onClick={scrollButton} size='2x' style={{textAlign: 'center', margin: 'auto', display: 'block', cursor: 'pointer'}} icon={faChevronDown} />
          </Container>
        </Jumbotron>

        <Jumbotron ref={ref} fluid style={{backgroundImage: 'url(' + require('../assets/projects/yeezy/1.jpg') + ')' }}>
          <Container>
            <h2>Software Engineering Project</h2>
            <p>An undergraduate group project I was a part of to design and build a series of zombie games.</p>
            <a href='https://sites.google.com/york.ac.uk/yeezygames/home' target='_blank' rel='noopener noreferrer'>
              <Button variant='success btn-lg'>See more <FontAwesomeIcon icon={faExternalLinkAlt} /></Button>
            </a>
          </Container>
        </Jumbotron>

        <CardDeck>
          <Card>
          <Card.Img variant='top' src={require('../assets/projects/asciistudio/2.jpg')} />
            <Card.Body>
              <Card.Title>ASCII Art Studio</Card.Title>
              <Card.Text>
                Convert images to beautiful ASCII art with this nifty tool.
              </Card.Text>
              <Link to='/projects/asciistudio'>
                <Button variant='info'>Let's go!</Button>
              </Link>
            </Card.Body>
          </Card>

          <Card>
          <Card.Img variant='top' src={require('../assets/projects/imageencryptor/1.jpg')} />
            <Card.Body>
              <Card.Title>Image Encryptor</Card.Title>
              <Card.Text>
                Hide secret messages in regular image files
              </Card.Text>
              <Link to='/projects/imageencryptor'>
                <Button variant='info'>Take me there</Button>
              </Link>
            </Card.Body>
          </Card>

          <Card>
          <Card.Img variant='top' src={require('../assets/projects/animationstudio/1.jpg')} />
            <Card.Body>
              <Card.Title>Animation Studio</Card.Title>
              <Card.Text>
                Craft simple monochrome animations
              </Card.Text>
              <Link to='/projects/animationstudio'>
                <Button variant='info'>Explore</Button>
              </Link>
            </Card.Body>
          </Card>

        </CardDeck>

        
        <CardDeck> 
          <Card>
              <Card.Img variant='top' src={require('../assets/projects/experimental/2.jpg')} />
              <Card.Body>
                  <Card.Title>Scientific Calculator</Card.Title>
                  <Card.Text>
                      Windows (C#) and Android (Java) calculator apps, with support for somewhat complex calculations
                  </Card.Text>
              </Card.Body>
          </Card>

          <Card>
              <Card.Img variant='top' src={require('../assets/projects/experimental/3.jpg')} />
              <Card.Body>
                  <Card.Title>Rich Text Editor</Card.Title>
                  <Card.Text>
                      Simple .rtf and .txt file editor written in C# .NET with a variety of formatting options including image support, bulleted lists, fonts and more
                  </Card.Text>
              </Card.Body>
          </Card>

          <Card>
              <Card.Img variant='top' src={require('../assets/projects/experimental/4.jpg')} />
              <Card.Body>
                  <Card.Title>Railcrafter Train Simulator</Card.Title>
                  <Card.Text>
                      A basic 3D train simulator built in C++ on the Irrlicht Engine, with 3D models produced in Blender
                  </Card.Text>
              </Card.Body>
          </Card>
        </CardDeck>


        <Jumbotron fluid style={{backgroundImage: 'url(' + require('../assets/projects/traincraft/10.jpg') + ')' }}>
          <Container>
            <h2>60km Long Traincraft Network</h2>
            <p>You'll be on the right track if you let off some steam on this Minecraft map.</p>
            <Link to='/projects/traincraft'>
              <Button variant='primary btn-lg'>Toot-toot!</Button>
            </Link>
          </Container>
        </Jumbotron>

        <Jumbotron fluid style={{backgroundImage: 'url(' + require('../assets/projects/house/3.jpg') + ')' }}>
          <Container>
            <h2>Mobfield Manor Minecraft Survival Map</h2>
            <p>Put your survival skills to the test and see how long you can last out as your explore this long-abandoned mansion.</p>
            <Link to='/projects/house'>
              <Button variant='danger btn-lg'>I dare to find out more</Button>
            </Link>
          </Container>
        </Jumbotron>

        <Jumbotron fluid style={{backgroundImage: 'url(' + require('../assets/projects/minecraftcity/1.jpg') + ')' }}>
          <Container>
            <h2>Creeperville Minecraft City</h2>
            <p>A huge city map which has spent more than half a decade in the making.</p>
            <Link to='/projects/city'>
              <Button variant='warning btn-lg'>Show me the money!</Button>
            </Link>
          </Container>
        </Jumbotron>        

        <Jumbotron fluid style={{backgroundImage: 'url(' + require('../assets/projects/gamemaker/1.jpg') + ')' }}>
          <Container>
            <h2>GameMaker 8 Games</h2>
            <p>These games were created during my early years as a programmer and let me experiment.</p>
            <Link to='/projects/gamemaker'>
              <Button variant='dark btn-lg'>Tell me more</Button>
            </Link>
          </Container>
        </Jumbotron>        

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