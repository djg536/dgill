import React, {Component} from 'react';
import { Card, CardDeck } from 'react-bootstrap';

class GameMaker extends Component {
    render() {
        return (
            <div>
                <div className="main-text">
                    <h1>GameMaker 8 Games</h1>
                    <p/>
                    <strong>I first learnt the basics of programming using an application called <a href="https://www.yoyogames.com/gamemaker">GameMaker</a>, the same platform behind the hit game Undertale. On this page you'll find a selection of the games that I created with this app.</strong>

                    <Card>
                        <Card.Img variant='top' src={require('../../assets/projects/gamemaker/5.jpg')} />
                        <Card.Body>
                            <Card.Title>Killer Zombies 2D</Card.Title>
                            <Card.Text>
                            A classic arcade-style zombie survival game.<br/>         
                            KZ is one of the first games that I developed, at a slow yet constant pace over the course of three years. The first major release was in 2011 and the last major update was in 2013. The game has solid texture pack support, meaning that one can customise how the game looks, and it even includes a level editor. The game was popular at the time with friends so I continued to add features like these throughout its development; several different versions were experimented with, including a buggy multiplayer version, Adobe Flash version and a top down 3D version. The latest update of the game is a far cry from the original version, with vastly improved graphics and performance.
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <CardDeck> 
                        <Card>
                            <Card.Img variant='top' src={require('../../assets/projects/gamemaker/6.jpg')} />
                            <Card.Body>
                                <Card.Title>Scribblecraft</Card.Title>
                                <Card.Text>
                                    Inspired by doodling, this was a game which let players create and play their own levels by drawing lines and adding enemies.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant='top' src={require('../../assets/projects/gamemaker/7.jpg')} />
                            <Card.Body>
                                <Card.Title>Pixeldot</Card.Title>
                                <Card.Text>
                                    In a world where everything is a square, you play as a smiling pixel who can change colour. Slide around and use explosives to clear walls of pixels out of the way.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Img variant='top' src={require('../../assets/projects/gamemaker/8.jpg')} />
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

export default GameMaker