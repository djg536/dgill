import React, {Component} from 'react';
import { Carousel, Container, Jumbotron } from 'react-bootstrap';
import generateCarouselItemsHTML from '../../Library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

class Traincraft extends Component {
    render() {
        return (
            <div>

                <Jumbotron fluid style={{backgroundImage: 'url(' + require('../../assets/projects/traincraft/1.jpg') + ')' }}>
                    <Container>
                        <h1>60KM Traincraft Network</h1>
                        <p>A huge web of tracks connecting a Minecraft world</p>
                    </Container>
                </Jumbotron>

                <div class='main-text'>
                    <br/>
                    This map is probably the largest ever rail network created in Minecraft; I have measured the length and it is around 60KM if one block is taken to be one meter. Some pieces of track are vanilla Minecraft rails whilst most is Traincraft track. There are sidings, branch lines, stations and many villages connected to the network. This map was created entirely in survival mode; there are many farms around the map as well as various players' houses since this map was often played on multiplayer. The vanilla Minecraft tracks were created first, and then the Traincraft mod was installed so Traincraft lines were added, often side by side to the vanilla lines. More recently, I have been working to build proper stations for villages that had a railway pass them but only had a halt, and double-tracking busy sections of the network to allow for higher capacity and bi-directional running on multiplayer.
                    <br/>
                    <br/>
                </div>

                <Carousel>
                    {generateCarouselItemsHTML(lst)}
                </Carousel>

                <div class='main-text'>
                    <p></p>

                    <strong>If you wish to play this world, you will need the following mods to be installed with Forge 1.7.10 or later:</strong>
                    <br/>
                    <br/>
                    <ul>
                        <li>Traincraft</li>
                        <li>Biomes O' Plenty</li>
                        <li>Chisel</li>
                        <li>Chocolate Quest</li>
                        <li>Enhanced Biomes</li>
                        <li>Mantle</li>
                        <li>Tinker's Construct</li>
                        <li>Lamps and Traffic Lights</li>
                        <li>MoarOres</li>
                    </ul>
                    <br/>
              

                    <div class='embed-responsive embed-responsive-16by9'>
                        <iframe class='embed-responsive-item' src='https://www.youtube.com/embed/hHQjd8VIYz0' allowFullScreen title='YouTube video of a half-an-hour-long cab ride on the map'></iframe>
                    </div>
                </div>

                <div class='main-text'>
                    <br/>
                    <a href='https://drive.google.com/open?id=1YyAuE1nhNyUZvHToeuONUyyQqmX8CvZO'><button class='btn btn-success'>Download Top-Down Map (Very large) <FontAwesomeIcon icon={faDownload} /></button></a>
                    &nbsp;
                    <a href='https://drive.google.com/open?id=1NRrbU9eWfZ2hqKRp_0_eVACTNjLI0P9F'><button class='btn btn-success'>Download Minecraft World (Over 750 MB) <FontAwesomeIcon icon={faDownload} /></button></a>
                </div>
            </div>
        );
    }
}

const lst = 
        [[require('../../assets/projects/traincraft/2.jpg'), 'A typical set of sidings as found on the map, alongside a farm and orchard.'],
        [require('../../assets/projects/traincraft/3.jpg'), 'A train departs a village station on the mainline. The tracks on the far left are sidings.'],
        [require('../../assets/projects/traincraft/4.jpg'), 'Crossing a lake by means of a rail bridge.'],
        [require('../../assets/projects/traincraft/5.jpg'), 'Crossing lava from a volcano on an arched stone viaduct.'],
        [require('../../assets/projects/traincraft/6.jpg'), 'A train arrives at the terminus of the northern mainline of the map.'],
        [require('../../assets/projects/traincraft/7.jpg'), 'A train waits idle in a station whilst players board.'],
        [require('../../assets/projects/traincraft/8.jpg'), 'Wood house station and level crossing.'],
        [require('../../assets/projects/traincraft/9.jpg'), 'A high speed train on the western mainline.']];

export default Traincraft;