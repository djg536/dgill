import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import generateCarouselItemsHTML from '../../Library';

class Traincraft extends Component {
    render() {
        return (
            <div>
                <h2>60KM Traincraft Network</h2>
                <strong>A huge web of tracks connecting a Minecraft world</strong>
                <br/>
			    This map is probably the largest ever rail network created in Minecraft; I have measured the length and it is around 60KM if one block is taken to be one meter. Some pieces of track are vanilla Minecraft rails whilst most is Traincraft track. There are sidings, branch lines, stations and many villages connected to the network. This map was created entirely in survival mode; there are many farms around the map as well as various players' houses since this map was often played on multiplayer. The vanilla Minecraft tracks were created first, and then the Traincraft mod was installed so Traincraft lines were added, often side by side to the vanilla lines. More recently, I have been working to build proper stations for villages that had a railway pass them but only had a halt, and double-tracking busy sections of the network to allow for higher capacity and bi-directional running on multiplayer.
			    <br/>
			    <br/>

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

                <Carousel>
                    {generateCarouselItemsHTML(lst)}
                </Carousel>

                <br/>
                <a href="images/minecraft/traincraft/World Map.jpg"><button>Download Top-Down Map (Very large)</button></a>
                <a href="https://drive.google.com/open?id=1NRrbU9eWfZ2hqKRp_0_eVACTNjLI0P9F"><button>Download Minecraft World (Over 750 MB)</button></a>

            </div>
        );
    }
}

const lst = 
        [[require("../../assets/projects/traincraft/2.jpg"), "A typical set of sidings as found on the map, alongside a farm and orchard."],
        [require("../../assets/projects/traincraft/3.jpg"), "A train departs a village station on the mainline. The tracks on the far left are sidings."],
        [require("../../assets/projects/traincraft/4.jpg"), "Crossing a lake by means of a rail bridge."],
        [require("../../assets/projects/traincraft/5.jpg"), "Crossing lava from a volcano on an arched stone viaduct."],
        [require("../../assets/projects/traincraft/6.jpg"), "A train arrives at the terminus of the northern mainline of the map."],
        [require("../../assets/projects/traincraft/7.jpg"), "A train waits idle in a station whilst players board."],
        [require("../../assets/projects/traincraft/8.jpg"), "Wood house station and level crossing."],
        [require("../../assets/projects/traincraft/9.jpg"), "A high speed train on the western mainline."]];

export default Traincraft;