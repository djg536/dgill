import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Switch, Route, NavLink, HashRouter } from 'react-router-dom';

import Home from './pages/Home';
import Trains from './pages/Trains';
import Projects from './pages/Projects';
import About from './pages/About';

ReactDOM.render(
            <HashRouter>

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
                    <Route path="/projects" component={Projects} />
                    <Route path="/trains" component={Trains} />
                    <Route path="/about" component={About} />
                </Switch>

            </HashRouter>
            , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
