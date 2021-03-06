import React, {Component} from 'react';

class Class91 extends Component {
    render() {
        return (
            <div>
                <div className='main-text'>
                    <h1>Class 91 (Intercity 225)</h1>
                    These trains were constructed in the late 1980s for use on the newly electrified East Coast Main Line. In test runs they have been able to top 160 MPH, and were designed to operate regularly at 140 MPH, but are limited to 125 MPH due to the lack of in-cab signalling. These trains have a faster acceleration than the HSTs, and lack slam doors, instead working with Mk4 coaches which have driver-operated sliding doors. These trains are an absolute joy to ride and eat in due to their on-board dining facilities. They have cooling fans which give them distinctive sound even at low speeds, making them one of the loudest electric trains I have ever heard! They have a really special history too, utilising much of the technology developed for the doomed Advanced Passenger Train project; there are gaps in the body work over the wheels and sloping carriage sides, originally to make it possible to convert them into tilting trains, which has never come into fruition. Most of them sadly have an uncertain future due to the government's Intercity Express Programme to replace most of the premier long-distance trains in the UK.
                    <br/>
                    <br/>
       
                    <div className='embed-responsive embed-responsive-16by9'>
                        <iframe className='embed-responsive-item' src='https://www.youtube.com/embed/_e7IRnpuBSE' allowFullScreen title='A YouTube video of a ride on a Class 91 going north towards York'></iframe>
                    </div>

                    <br/>
                    <br/>
                    <strong>Below: {caption1}</strong>
                    <br/>
                    <img className='img-fluid' src={require('../../assets/trains/91/1.jpg')} alt={caption1}/>
                    <br/>
                    <br/>
                    <strong>Below: {caption2}</strong>
                    <br/>
                    <img className='img-fluid' src={require('../../assets/trains/91/2.jpg')} alt={caption2}/>
                    <br/>
                    <br/>
                    <strong>Below: {caption3}</strong>
                    <br/>
                    <img className='img-fluid' src={require('../../assets/trains/91/3.jpg')} alt={caption3}/>
                </div>
            </div>
        );
    }
}

const caption1 = 'Class 91 at York';
const caption2 = 'Class 91 Interior';
const caption3 = "Thameslink Class 700 'Stormtrooper' sandwiched between two 91s.";

export default Class91;