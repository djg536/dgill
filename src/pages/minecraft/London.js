import React, {Component} from 'react';
import { Carousel, Container, Jumbotron } from 'react-bootstrap';
import generateCarouselItemsHTML from '../../Library';

class London extends Component {
    render() {
        return (
            <div>

                <Jumbotron fluid style={{backgroundImage: 'url(' + require('../../assets/minecraft/london/1.jpg') + ')' }}>
                    <Container>
                        <h1>Minecraft London</h1>
                        <p>London recreated with blocks.</p>
                    </Container>
                </Jumbotron>

                <div className='main-text'>
                    <br/>
                    This map is still very much work-in-progress, but is already starting to shine. It features some of London's most iconic buildings, built in geographically accurate locations. So far only some of it has been built and there are many unfilled, empty pieces of land between them which I intend to build on later. I have used satellite imagery and real-life photographs to try and be as accurate as possible.
                    <p/>
                    <strong>When released, this map will require Traincraft 1.7.10.</strong>
                    <br/>
                </div>

                <Carousel>
                    {generateCarouselItemsHTML(lst)}
                </Carousel>
            </div>
        );
    }
}

const lst = 
        [[require('../../assets/minecraft/london/2.jpg'), "The London Underground Victoria Line platforms at King's Cross St. Pancras Station."],
        [require('../../assets/minecraft/london/3.jpg'), "King's Cross Station"],
        [require('../../assets/minecraft/london/4.jpg'), 'Liverpool Street Station'],
        [require('../../assets/minecraft/london/5.jpg'), "Streets in the King's Cross district"],
        [require('../../assets/minecraft/london/6.jpg'), "St. Paul's Cathederal currently stands unsurrounded by other buildings"],
        [require('../../assets/minecraft/london/7.jpg'), 'You should know where this is.'],
        [require('../../assets/minecraft/london/8.jpg'), 'Canary Wharf 1'],
        [require('../../assets/minecraft/london/9.jpg'), 'Canary Wharf 2'],
        [require('../../assets/minecraft/london/10.jpg'), 'Canary Wharf DLR Station'],
        [require('../../assets/minecraft/london/11.jpg'), 'Tower Bridge with the Monument in the background']];

export default London;