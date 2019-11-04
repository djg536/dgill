import React, {Component} from 'react';

class Class317 extends Component {
    render() {
        return (
            <div>
                <div class='main-text'>
                    <h1>British Rail Class 317 EMU</h1>
                    These four car electric multiple units have been working since the early 1980s on various London commuter routes. They have a top speed of 100 MPH due to them working over longer distances, but only one car is powered. Several different variants have been produced, and the units have all been refurbished to different standards. A 'demonstrator' unit of the class was retractioned and given modern climate control as an experiment to see whether the units could be given a life extension with a heavy refurbishment, but so far this seems to have been unsuccessful as Greater Anglia and London Overground have announced that they will purchase brand new replacements. However, who knows whether this stock will find some use outside of London on newly electrified lines?
                    <br/>
                    <br/>

                    <div class='embed-responsive embed-responsive-16by9'>
                        <iframe class='embed-responsive-item' src='https://www.youtube.com/embed/peU39OUh614' allowFullScreen title='YouTube video of a ride on a Class 317 leaving Cambridge for London via the West Anglia Main Line'></iframe>
                    </div>

                    <br/>
                    <br/>
                    <strong>Below: {caption1}</strong>
                    <br/>
                    <img class='img-fluid' src={require('../../assets/trains/317/1.jpg')} alt={caption1} />
                    <br/>
                    <br/>
                    <strong>Below: {caption2}</strong>
                    <br/>
                    <img class='img-fluid' src={require('../../assets/trains/317/2.jpg')} alt={caption2} />
                </div>
            </div>
        );
    }
}

const caption1 = 'Greater Anglia Class 317/6 Interior, refurbished around the new millennium, which I think is quite comfortable.';
const caption2 = 'Greater Anglia Class 317/5 Interior, which I think have some of the worst seats of any train in the UK; the originals from the 1980s with just different seat covers - they are falling apart! However, they are miles better than they were with the old seat covers and carpets which made these trains smell like a wet dog.';

export default Class317;