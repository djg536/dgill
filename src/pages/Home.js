import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJava, faJsSquare, faReact, faCss3Alt, faHtml5 } from '@fortawesome/free-brands-svg-icons';

//TODO: include license for particles.js and react-particles-js!

class Home extends Component {
  render() {
    return (
        <div>

          <Jumbotron fluid style={{backgroundImage: 'url(' + require('../assets/home/1.jpg') + ')' }}>
            <Container style={{width: 'fit-content'}}>
              <h4>Hi, I'm a Software Developer.</h4>
              <h1>You can call me Dave.</h1>
              <p></p>
              <FontAwesomeIcon size='2x' icon={faJava} />
              <FontAwesomeIcon size='2x' icon={faPython} />
              <FontAwesomeIcon size='2x' icon={faJsSquare} />
              <FontAwesomeIcon size='2x' icon={faReact} />
              <FontAwesomeIcon size='2x' icon={faCss3Alt} />
              <FontAwesomeIcon size='2x' icon={faHtml5} />
              <h4 style={{display: 'inline-block'}}>C# .NET</h4>
              <h4 style={{display: 'inline-block'}}>SQL</h4>
            </Container>
          </Jumbotron>

           <Particles params={require('../assets/home/particlesjs-config.json')}/>

         
        </div>
    );
  }
}


export default Home;