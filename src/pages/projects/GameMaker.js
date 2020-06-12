import React, {Component} from 'react';

class GameMaker extends Component {
    render() {
        return (
            <div>
                <div className="main-text">
                    <h1>GameMaker 8 Games</h1>
                    <p/>
                    I first learnt the basics of programming using an application called <a href="https://www.yoyogames.com/gamemaker">GameMaker</a>,
                    the same platform behind the hit game Undertale. 
                    <p/>
                    On this page you'll find a summary of the games that I created using this app.

                    <h3 className="upper-margin">Killer Zombies 2D</h3>
                    A classic arcade-style zombie survival game.<br/>         
                    KZ is one of the first games that I developed, at a slow yet constant pace over the course of three years. The first major release was in 2011 and the last major update was in 2013. The game has solid texture pack support, meaning that one can customise how the game looks, and it even includes a level editor. The game was popular at the time with friends so I continued to add features like these throughout its development; several different versions were experimented with, including a buggy multiplayer version, Adobe Flash version and a top down 3D version. The latest update of the game is a far cry from the original version, with vastly improved graphics and performance.
                    <p/>
                    <img className='img-fluid' src={require('../../assets/projects/gamemaker/2.jpg')} alt={altText} />                
                
                    <h3 className="upper-margin">Scribblecraft</h3>
                    Inspired by doodling, this was a game which let players create and play their own levels by drawing lines and adding enemies.
                    <p/>
                    <img className='img-fluid' src={require('../../assets/projects/gamemaker/3.jpg')} alt={altText} />        

                    <h3 className="upper-margin">Pixeldot</h3>
                    In a world where everything is a square, you play as a smiling pixel who can change colour. Slide around and use explosives to clear walls of pixels out of the way.
                    <p/>
                    <img className='img-fluid' src={require('../../assets/projects/gamemaker/4.jpg')} alt={altText} />               

                    <h3 className="upper-margin">Tunnel Shooter</h3>
                    Players race through tunnels in a spaceship, shooting at enemies and flying through rings for a speed boost.
                    <p/> 
                    <img className='img-fluid' src={require('../../assets/projects/gamemaker/5.jpg')} alt={altText} />                                 
                </div>        
            </div>
        );
    }
}

const altText = "A screenshot of the game";

export default GameMaker