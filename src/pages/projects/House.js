import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import generateCarouselItemsHTML from '../../Library';

class House extends Component {
    render() {
        return (
            <div>
                <h2>Haunted House</h2>
                <strong>A gruelling survival challenge map - will you survive?</strong>
                <br/>
                This map features a large haunted house filled with mob spawners and is great in multiplayer. The aim is to traverse the house in survival mode, picking up items and tools from chests scattered all over. There are several diary entries written by those inhabiting the house during its downfall, to help you unravel the story behind it. Solve puzzles and riddles, and try not to get lost!
                <br/>
                <br/>

                <Carousel>
                    {generateCarouselItemsHTML(lst)}
                </Carousel>

                <br/>
			    <a href="https://drive.google.com/open?id=1yXYP5VdblMhWKa8a_DmielqyXCBQEKaJ"><button>Download</button></a>
            </div>
        );
    }
}

const lst = 
        [[require("../../assets/projects/house/3.jpg"), "Large stone columns give this room a temple-like appearance."],
        [require("../../assets/projects/house/4.jpg"), "This is one of the outdoor areas and features a maze."],
        [require("../../assets/projects/house/5.jpg"), "The main courtyard of the house."],
        [require("../../assets/projects/house/6.jpg"), "Numerous spawners make traversal a challenge."],
        [require("../../assets/projects/house/7.jpg"), "Some areas are particuarly worse for wear and nature has taken over."],
        [require("../../assets/projects/house/8.jpg"), "Some rooms are deep underground in a labyrinth of tunnels."]];

export default House;