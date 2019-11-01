import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Switch, Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import Trains from './pages/Trains';
import Projects from './pages/Projects';
import About from './pages/About';
import MinecraftCity from './pages/projects/MinecraftCity';

function App() {
  return (
    <div className="App">
      
      <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
        <Navbar.Brand as={NavLink} to="/">dgill.uk</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/projects">Projects</Nav.Link>
            <Nav.Link as={NavLink} to="/trains">Trains</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={ProjectsRouter} />
        <Route path="/trains" component={Trains} />
        <Route path="/about" component={About} />      
      </Switch>

    </div>
  );
}

const ProjectsRouter = ({ match }) => (
  <div>
    <Switch>
      <Route path={`${match.path}/city`} component={MinecraftCity}/>
      <Route path={`${match.path}`} component={Projects}/>
    </Switch>
  </div>
  )

export default App;
