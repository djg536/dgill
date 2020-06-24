import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Particles from 'react-particles-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDragon } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {
  render() {
    return (
        <div>

          <Jumbotron fluid style={{backgroundImage: 'url(' + require('../assets/home/1.jpg') + ')' }}>
            <Container style={{width: 'fit-content', textAlign: 'center'}}>
              <h4>Hi, I'm a Software Developer.</h4>
              <h1>You can call me David.</h1>
              <p></p>
              <FontAwesomeIcon size='4x' icon={faDragon} />
              <h4 className="upper-margin">Please enjoy exploring my website, unless you have a very important meeting to attend to.</h4>

            </Container>
          </Jumbotron>

           <Particles params={require('../assets/home/particlesjs-config.json')}/>

         
        </div>
    );
  }
}


export default Home;