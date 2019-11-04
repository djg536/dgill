import React, {Component} from 'react';
import { Carousel, Container, Jumbotron } from 'react-bootstrap';
import generateCarouselItemsHTML from '../../Library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

class House extends Component {
    render() {
        return (
            <div>

                <Jumbotron fluid style={{backgroundImage: 'url(' + require('../../assets/projects/house/2.jpg') + ')' }}>
                    <Container>
                        <h1>Mobfield Manor</h1>
                        <p>A gruelling Minecraft survival challenge map - will you survive?</p>
                    </Container>
                </Jumbotron>

                <div class='main-text'>
                    <br/>
                    This map features a large mansion filled with mob spawners and is great in multiplayer. The aim is to traverse the house in survival mode, picking up items and tools from chests scattered all over. There are several diary entries written by those inhabiting the house during its downfall, to help you unravel the story behind it. Solve puzzles and riddles, and try not to get lost!
                    <br/>
                    <br/>
                </div>

                <Carousel>
                    {generateCarouselItemsHTML(lst)}
                </Carousel>

                <div class='main-text'>
                    <br/>
                    <a href='https://drive.google.com/open?id=1yXYP5VdblMhWKa8a_DmielqyXCBQEKaJ'><button class='btn btn-success'>Download <FontAwesomeIcon icon={faDownload} /></button></a>
                </div>
            </div>
        );
    }
}

const lst = 
        [[require('../../assets/projects/house/3.jpg'), 'Large stone columns give this room a temple-like appearance.'],
        [require('../../assets/projects/house/4.jpg'), 'This is one of the outdoor areas and features a maze.'],
        [require('../../assets/projects/house/5.jpg'), 'The main courtyard of the house.'],
        [require('../../assets/projects/house/6.jpg'), 'Numerous spawners make traversal a challenge.'],
        [require('../../assets/projects/house/7.jpg'), 'Some areas are particuarly worse for wear and nature has taken over.'],
        [require('../../assets/projects/house/8.jpg'), 'Some rooms are deep underground in a labyrinth of tunnels.']];

export default House;