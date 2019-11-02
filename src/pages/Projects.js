import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <ul>
          <li><Link to="/projects/city">Minecraft City</Link></li>
          <li><Link to="/projects/traincraft">Traincraft</Link></li>
          <li><Link to="/projects/house">House</Link></li>
        </ul>
      </div>
    );
  }
}

export default Projects;