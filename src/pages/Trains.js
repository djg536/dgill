import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Trains extends Component {
  render() {
    return (
        <div>
          <h2>Trains</h2>
          There are so many interesting trains and railways, of which some of my favourites from the UK have been detailed here.
          <br/>
          <strong>Train Profiles</strong>
          <ul>
            <li><Link to="/trains/class43">Class 43 HST</Link></li>
            <li><Link to="/trains/class91">Class 91</Link></li>
            <li><Link to="/trains/class315">Class 315</Link></li>
            <li><Link to="/trains/class317">Class 317</Link></li>
            <li><Link to="/trains/class390">Class 390</Link></li>
            <li><Link to="/trains/class395">Class 395</Link></li>
          </ul>

          <strong>Railways and Networks</strong>
          <ul>
            <li><Link to="/trains/tyneandwearmetro">Tyne and Wear Metro</Link></li>
            <li><Link to="/trains/merseyrail">Merseyrail</Link></li>
          </ul>
        </div>
    );
  }
}

export default Trains;