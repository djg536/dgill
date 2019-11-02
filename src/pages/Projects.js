import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Card, Button, CardDeck } from 'react-bootstrap';

import '../App.css';

class Projects extends Component {
  render() {
    return (
      <div>
        <Jumbotron fluid style={{backgroundImage: "url(" + require("../assets/projects/1.jpg") + ")" }}>
          <Container>
            <h2>Projects</h2>
            <p>Here you'll find some of the things that I have been working on.<br/>
               Immerse yourself in this selection of my favourite creations. Have fun!</p>
          </Container>
        </Jumbotron>

    
        <Card text='light'>
        <Card.Img src={require("../assets/projects/traincraft/2.jpg")} />
          <Card.ImgOverlay>
            <Card.Text>
              <h2>60km Long Traincraft Network</h2>
              <p>You'll be on the right track if you let off some steam on this Minecraft map.</p>
              <br/>
              <Link to="/projects/traincraft">
              <Button variant="primary btn-lg">Toot-toot!</Button>
              </Link>
            </Card.Text> 
          </Card.ImgOverlay>
        </Card>
              
        <Card>
        <Card.Img variant="top" src={require("../assets/projects/house/3.jpg")} />
          <Card.Body>
            <Card.Title>Mobfield Manor Minecraft Survival Map</Card.Title>
            <Card.Text>
              Put your survival skills to the test and see how long you can last out as your explore this long-abandoned mansion.
            </Card.Text>
            <Link to="/projects/house">
              <Button variant="primary">I dare to find out more</Button>
            </Link>
          </Card.Body>
        </Card>
        
        <Card>
        <Card.Img variant="top" src={require("../assets/projects/minecraftcity/1.jpg")} />
          <Card.Body>
            <Card.Title>Creeperville Minecraft City</Card.Title>
            <Card.Text>
              A huge city map which has spent more than half a decade in the making. 
            </Card.Text>
            <Link to="/projects/city">
              <Button variant="primary">Show me the money!</Button>
            </Link>
          </Card.Body>
        </Card>
          
       
        <CardDeck>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require("../assets/projects/asciistudio/1.jpg")} />
            <Card.Body>
              <Card.Title>ASCII Art Studio</Card.Title>
              <Card.Text>
                Convert regular image files to beautiful ASCII art with this nifty tool.
              </Card.Text>
              <Link to="/projects/asciistudio">
                <Button variant="primary">Let's go!</Button>
              </Link>
            </Card.Body>
          </Card>

                
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require("../assets/projects/imageencryptor/1.jpg")} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </CardDeck>
          
        

        <ul>
          <li><Link to="/projects/city">Minecraft City</Link></li>
          <li><Link to="/projects/traincraft">Traincraft</Link></li>
          <li><Link to="/projects/house">House</Link></li>
          <li><Link to="/projects/asciistudio">Ascii Art Studio</Link></li>
          <li><Link to="/projects/imageencryptor">Image Encryptor</Link></li>
          <li><a href="https://sites.google.com/york.ac.uk/yeezygames/home">Yeezy Games</a></li>
        </ul>
      </div>
    );
  }
}

export default Projects;