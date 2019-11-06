import React, { Component } from 'react';
import { Carousel, Container, Jumbotron } from 'react-bootstrap';
import generateCarouselItemsHTML from '../../Library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

class MinecraftCity extends Component {
  render() {
    return (
        <div>

            <Jumbotron fluid style={{backgroundImage: 'url(' + require('../../assets/minecraft/minecraftcity/1.jpg') + ')' }}>
                <Container>
                    <h1>Creeperville Minecraft City</h1>
                    <p>An idyllic and leafy Minecraft city with a variety of districts</p>
                </Container>
            </Jumbotron>

            <div className='main-text'>
                <br/>
                This Minecraft city stretches for a few kilometers, and is my idea of a future metropolis and urban paradise:
                <br/>
                <br/>
                <ul>
                    <li>Plenty of green space and parks, even in the center of the city</li>
                    <li>Farms to provide food and self-sufficiency</li>
                    <li>Large office blocks and skyscrapers</li>
                    <li>Low rise residential areas and mansions</li>
                    <li>Extremely dense underground and light railway network, as well as commuter lines connecting nearby villages - no roads or traffic of any kind</li>
                    <li>Epic stations, sports stadiums, bridges, cathederals, castles</li>
                    <li>Several large ships and boats are dotted around the waters</li>
                    <li>Player and mob statues</li>
                    <li>Airports and hotels</li>
                </ul>
                <br/>
                This map has been in development for around half a decade; there are so many small tunnels and hidden areas that even I can't remember all the secrets that the city holds!
                <br/>
            </div>

            <Carousel>
                {generateCarouselItemsHTML(lst)}
            </Carousel>

            <div className='main-text'>
                <br/>
                <a href='https://drive.google.com/file/d/0B7CUQChSYQFROEluWE9iWnpRWTg/view'><button className='btn btn-success'>Download <FontAwesomeIcon icon={faDownload} /></button></a>
            </div>
        </div>
    );
  }
}

const lst =
        [[require('../../assets/minecraft/minecraftcity/2.jpg'), 'A hill with a view'],
        [require('../../assets/minecraft/minecraftcity/3.jpg'), 'A low rise street of houses with skyscrapers in the distance.'],
        [require('../../assets/minecraft/minecraftcity/4.jpg'), 'The Monorail transit system passes over a metro line in the heart of the city'],
        [require('../../assets/minecraft/minecraftcity/5.jpg'), 'Here is Creeperville City Park with its lake and gardens'],
        [require('../../assets/minecraft/minecraftcity/6.jpg'), 'There are a wide variety of land uses and types of building'],
        [require('../../assets/minecraft/minecraftcity/7.jpg'), 'Manor Street metro station on Line 3b'],
        [require('../../assets/minecraft/minecraftcity/8.jpg'), 'The rail network is very dense and is the fastest way to travel'], 
        [require('../../assets/minecraft/minecraftcity/9.jpg'), 'Creeperville football stadium'], 
        [require('../../assets/minecraft/minecraftcity/10.jpg'), 'Some buildings are based on real life ones. Here we look across the lakes and the roof of Marylecreeper station, which is based on London Marylebone.'],
        [require('../../assets/minecraft/minecraftcity/11.jpg'), 'Now this is what I call a lounge!'],
        [require('../../assets/minecraft/minecraftcity/12.jpg'), 'The interior of a 1930s-style semi-detached house'],
        [require('../../assets/minecraft/minecraftcity/13.jpg'), 'Canals allow for tranquil boat travel and leisure']];

export default MinecraftCity;