import React, {Component} from 'react';
import { Card, CardDeck, Jumbotron, Container } from 'react-bootstrap';

class Experimental extends Component {
    render() {
        return (
            <div>
                <div className="main-text">
                    <h1>Experimental and Legacy Projects</h1>
                    <strong>These programs are older or never passed exploratory phases.</strong>
                    <p/>

                    <CardDeck style={{color: 'black'}}> 
                        <Card>
                            <Card.Img variant='top' src={require('../../assets/projects/experimental/2.jpg')} />
                            <Card.Body>
                                <Card.Title>Scientific Calculator</Card.Title>
                                <Card.Text>
                                    Windows (C#) and Android (Java) calculator apps, with support for somewhat complex calculations
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant='top' src={require('../../assets/projects/experimental/3.jpg')} />
                            <Card.Body>
                                <Card.Title>Rich Text Editor</Card.Title>
                                <Card.Text>
                                    Simple .rtf and .txt file editor written in C# .NET with a variety of formatting options including image support, bulleted lists, fonts and more
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant='top' src={require('../../assets/projects/experimental/4.jpg')} />
                            <Card.Body>
                                <Card.Title>Railcrafter Train Simulator</Card.Title>
                                <Card.Text>
                                    A basic 3D train simulator built in C++ on the Irrlicht Engine, with 3D models produced in Blender
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    <p/>
                    <h2 style={{paddingTop: '40px'}}>Gamemaker 8 Games</h2>
                    <strong>I first learnt the basics of programming using an application called <a href="https://www.yoyogames.com/gamemaker">Gamemaker</a>, the same platform behind the hit game Undertale. Here are a selection of the games I created with this app:</strong>
                </div>
                <Jumbotron fluid style={{backgroundImage: 'url(' + require('../../assets/projects/experimental/5.jpg') + ')' }}>
                    <Container>
                        <h3>Killer Zombies 2D</h3>
                        <p>Classic arcade style zombie survival game</p>
                        KZ is one of the first games that I developed, at a slow yet constant pace over the course of three years. The first major release was in 2011 and the last major update was in 2013. The game has solid texture pack support, meaning that one can customise how the game looks, and it even includes a level editor. The game was popular at the time with friends so I continued to add features like these throughout its development; several different versions were experimented with, including a buggy multiplayer version, Adobe Flash version and a top down 3D version. The latest update of the game is a far cry from the original version, with vastly improved graphics and performance. 
                    </Container>
                </Jumbotron>

                <div className="main-text">
                    <CardDeck style={{color: 'black'}}> 
                            <Card>
                                <Card.Img variant='top' src={require('../../assets/projects/experimental/6.jpg')} />
                                <Card.Body>
                                    <Card.Title>Scribblecraft</Card.Title>
                                    <Card.Text>
                                        Inspired by doodling, this was a game which let players create and play their own levels by drawing lines and adding enemies.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Img variant='top' src={require('../../assets/projects/experimental/7.jpg')} />
                                <Card.Body>
                                    <Card.Title>Pixeldot</Card.Title>
                                    <Card.Text>
                                        In a world where everything is a square, you play as a smiling pixel who can change colour. Slide around and use explosives to clear walls of pixels out of the way.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card>
                                <Card.Img variant='top' src={require('../../assets/projects/experimental/8.jpg')} />
                                <Card.Body>
                                    <Card.Title>Tunnel Shooter</Card.Title>
                                    <Card.Text>
                                        Players race through tunnels in a spaceship, shooting at enemies and flying through rings for a speed boost.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </div>
            </div>
        );
    }
}

export default Experimental