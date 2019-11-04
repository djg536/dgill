import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Switch, Route, NavLink } from 'react-router-dom';

//Make sure that this import is after Bootstrap
import './App.css';

import Home from './pages/Home';
import Trains from './pages/Trains';
import Projects from './pages/Projects';
import About from './pages/About';
import MinecraftCity from './pages/projects/MinecraftCity';
import Traincraft from './pages/projects/Traincraft';
import House from './pages/projects/House';
import AsciiStudio from './pages/projects/AsciiStudio';
import ImageEncryptor from './pages/projects/ImageEncryptor';
import TyneAndWearMetro from './pages/trains/TyneAndWearMetro';
import Merseyrail from './pages/trains/Merseyrail';
import Class43 from './pages/trains/Class43';
import Class91 from './pages/trains/Class91';
import Class315 from './pages/trains/Class315';
import Class317 from './pages/trains/Class317';
import Class390 from './pages/trains/Class390';
import Class395 from './pages/trains/Class395';



function App() {
  
  const [expanded, setExpanded] = useState(false);

  return (
    <div onClick={() => {if (expanded==='expanded') setExpanded(false)}}>
      
      <Navbar expanded={expanded} expand='sm' variant='dark' fixed='top'>
        <Navbar.Brand as={NavLink} to='/'>dgill.uk</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' onClick={() => setExpanded('expanded')}/>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link as={NavLink} onClick={() => setExpanded(false)} to='/projects'>Projects</Nav.Link>
            <Nav.Link as={NavLink} onClick={() => setExpanded(false)} to='/trains'>Trains</Nav.Link>
            <Nav.Link as={NavLink} onClick={() => setExpanded(false)} to='/about'>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={ProjectsRouter} />
        <Route path='/trains' component={TrainsRouter} />
        <Route path='/about' component={About} />      
      </Switch>

    </div>
  );
}


const ProjectsRouter = ({match}) => (
  <div>
    <Switch>
      <Route path={`${match.path}/city`} component={MinecraftCity}/>
      <Route path={`${match.path}/traincraft`} component={Traincraft}/>
      <Route path={`${match.path}/house`} component={House}/>
      <Route path={`${match.path}/asciistudio`} component={AsciiStudio}/>
      <Route path={`${match.path}/imageencryptor`} component={ImageEncryptor}/>
      <Route path={`${match.path}`} component={Projects}/>
    </Switch>
  </div>
  )

const TrainsRouter = ({match}) => (
  <div>
    <Switch>
      <Route path={`${match.path}/class43`} component={Class43}/>
      <Route path={`${match.path}/class91`} component={Class91}/>
      <Route path={`${match.path}/class315`} component={Class315}/>
      <Route path={`${match.path}/class317`} component={Class317}/>
      <Route path={`${match.path}/class390`} component={Class390}/>
      <Route path={`${match.path}/class395`} component={Class395}/>
      <Route path={`${match.path}/tyneandwearmetro`} component={TyneAndWearMetro}/>
      <Route path={`${match.path}/merseyrail`} component={Merseyrail}/>
      <Route path={`${match.path}`} component={Trains}/>
    </Switch>
  </div>
)

export default App;
