import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
        <div className="main-text">
          <h1>About this place</h1>
          This website is maintained by D. Gillman, hence its domain.
        
          <p>It was built using <a href="https://reactjs.org/">React</a>, 
          with help from beautiful <a href="https://fontawesome.com/">Font Awesome</a> icons, 
          and amazing <a href="https://github.com/Wufe/react-particles-js">particles.js</a> effects.</p>
        
          <p>Stay tuned to see more projects.</p>
        </div>
    );
  }
}

export default About;