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

                    The idea for this map is to recreate central London and
                    Canary Wharf in Minecraft. I love the city, its architecture
                    and history, and so thought it would be an interesting project
                    to explore this in everyone's favourite voxel game.
                    It's still very much work-in-progress but is already starting to shine.
                    <p/>
                    I've started by working on some of London's most iconic buildings,
                    positioning them on the map in roughly geographically accurate locations.
                    Making use of satellite imagery and photographs, I have attempted
                    to build these structures as close to real-life as I can.
                    Of course, there are limitations, given the blocky nature of Minecraft.
                    <p/>
                    I have also built sections of London Underground and National Rail
                    lines in the city, as accurately as I can. Again making use of satellite imagery, 
                    I have been helped by the fact that the layout diagrams of many Tube stations
                    were previously released by TFL as part of a <a href="https://www.whatdotheyknow.com/request/maps_of_public_corridors_on_larg#outgoing-458932">Freedom of Information Request</a>.
                    This has been very helpful; for example, whilst most Tube stations have
                    two platforms side-by-side (for each direction of travel), did you know that the Jubilee
                    Line at Westminster station has its Eastbound platform directly above its 
                    Westbound platform?
                    <p/>
                    Recreating a dense and iconic city is no small feat!
                    To make things easier, the most iconic buildings and districts are being
                    built more closely together on the map than in reality, so that I can avoid
                    building most of the lesser known streets in-between.
                    <p/>
                    So far only some of it has been built and there are many unfilled,
                    empty pieces of land between the different sites which I intend to build on later.   
                    This map will be released at a later date.                        
                    <p/>
                    <strong>When released, this map will require Traincraft 1.7.10.</strong>
                    <br/>
                </div>

                <Carousel>
                    {generateCarouselItemsHTML(lst)}
                </Carousel>

                <div className='main-text upper-margin'>
                    <h3>11th June 2020 Development Update</h3>
                    Work on the map has been progressing. Rome was not built in a day,
                    and neither will this city be - a major undertaking at the least.
                    <p/>
                    Summary of work:
                    <p/>
                    <ul>
                        <li>Victoria Line extended from King's Cross St. Pancras to Euston</li>
                        <li>St. Pancras Station building taking shape</li>
                        <li>The entirety of the Northern City Line has been constructed</li>
                        <li>Central Line built between Liverpool St. and Oxford Circus</li>
                        <li>Liverpool St. Station building has been reduced in size</li>
                        <li>Thameslink built between Farringdon and Blackfriars</li>
                    </ul>
                    <p/>
                    Note that all of these works involve the rail network.
                    This is partially because building this first will allow it to
                    serve as a datum for positioning the rest of the city buildings,
                    but also because I like trains if you haven't noticed.
                </div>
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
        [require('../../assets/minecraft/london/11.jpg'), 'Tower Bridge with the Monument in the background'],
        [require('../../assets/minecraft/london/12.jpg'), 'The Barbican Centre, a fine example of Brutalist architecture'],
        [require('../../assets/minecraft/london/13.jpg'), 'Low-rise housing square with Lauderdale Tower in the background'],
        [require('../../assets/minecraft/london/14.jpg'), "The distinctive curve of Bank Station's Central Line platforms"],
        [require('../../assets/minecraft/london/15.jpg'), 'The facade of St. Pancras is taking shape'],
        [require('../../assets/minecraft/london/16.jpg'), "Escalators at King's Cross"]];

export default London;