import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container } from 'react-bootstrap';


class Trains extends Component {
  render() {
    return (
        <div>
          <Jumbotron fluid style={{backgroundImage: 'url(' + require('../assets/trains/1.jpg') + ')' }}>
            <Container style={{color: 'black', width: 'fit-content'}}>
              <h1>The Train Encyclopedia</h1>
              <p>A review of the most interesting modern trains and railways in the UK.</p>
            </Container>
          </Jumbotron>

          <div className='main-text'>
            <br/>
            <strong>Train Profiles</strong>
            <ul>
              <li><Link to='/trains/class43'>Class 43 HST</Link></li>
              <li><Link to='/trains/class91'>Class 91</Link></li>
              <li><Link to='/trains/class315'>Class 315</Link></li>
              <li><Link to='/trains/class317'>Class 317</Link></li>
              <li><Link to='/trains/class390'>Class 390</Link></li>
              <li><Link to='/trains/class395'>Class 395</Link></li>
            </ul>

            <strong>Railways and Networks</strong>
            <ul>
              <li><Link to='/trains/tyneandwearmetro'>Tyne and Wear Metro</Link></li>
              <li><Link to='/trains/merseyrail'>Merseyrail</Link></li>
            </ul>
          </div>
        </div>
    );
  }
}

export default Trains;