import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class MinecraftCity extends Component {
  render() {
    return (
        <div>
            <h2>Creeperville Minecraft City</h2>
            <strong>An idyllic and leafy Minecraft city with a a variety of districts</strong>
            <br/>
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

            <Carousel>
                {caro()}
            </Carousel>

			<br/>
            <a href="https://drive.google.com/file/d/0B7CUQChSYQFROEluWE9iWnpRWTg/view"><button>Download</button></a>
        </div>
    );

    function caro() {

        const lst =
            [[require("../../assets/projects/minecraftcity/3.jpg"), "A low rise street of houses with skyscrapers in the distance."],
            [require("../../assets/projects/minecraftcity/4.jpg"), "Older style buildings stand alongside modern."],
            [require("../../assets/projects/minecraftcity/5.jpg"), "Some parts of the city are clustered with high rise buildings."],
            [require("../../assets/projects/minecraftcity/6.jpg"), "The city is home to green spaces and parks."],
            [require("../../assets/projects/minecraftcity/7.jpg"), "There are a wide variety of land uses and types of building."],
            [require("../../assets/projects/minecraftcity/8.jpg"), "The rail network is very dense and is the fastest way to travel."], 
            [require("../../assets/projects/minecraftcity/9.jpg"), "Creeperville football stadium."], 
            [require("../../assets/projects/minecraftcity/10.jpg"), "Some buildings are based on real life ones. Here we look across the lakes and the roof of Marylecreeper station, which is based on London Marylebone."]];

        //Must have a key in each list item

        const items = lst.map((image, i) => {
            return (
                <Carousel.Item key={i}>
                    <img className="d-block w-100" src={image[0]}
                    alt={image[1]} />

                    <Carousel.Caption>
                        <p>{image[1]}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                );
        });  
  
        return (items);
    };
  }
}

export default MinecraftCity;