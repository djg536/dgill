import React, {Component} from 'react';

class Class43 extends Component {
    render() {
        return (
            <div>
                <div className='main-text'>
                    <h1>British Rail High Speed Train (Class 43 HST)</h1>
                    These are perhaps the most iconic type of train to be found on Britain's mainlines today, and can be found all over the network. They are also know as the Intercity 125, due to their ability to reguarly operate at 125 MPH. On test runs, higher speeds have been achieved, giving this class of train the world speed record for the fastest diesel locomotive, but in conventional running are limited to 125 MPH as it is not deemed safe to go any faster with lineside, rather than in-cab signalling. Each train is made up of two Class 43 power cars at each end of the train in a push-pull fashion, and Mk3 coaches which are slam door. Built from 1975-82, most of these trains are still in regular service, but are due to be replaced due to the Intercity Express Programme; some are going to Scotrail for further use, but require extensive modification to satisfy new regulations.
                    <br/>
                    <br/>
      
                    <div className='embed-responsive embed-responsive-16by9'>
                        <iframe className='embed-responsive-item' src='https://www.youtube.com/embed/tXkXQ7FoNc8' allowFullScreen title='A YouTube video taken on a HST at speed out of an open window on one of its slam doors'></iframe>
                    </div>
        
                    <br/>
                    <br/>
                    <strong>Below: {caption1}</strong>
                    <br/>
                    <img className='img-fluid' src={require('../../assets/trains/43/1.jpg')} alt={caption1}/>
                    <br/>
                    <br/>
                    <strong>Below: {caption2}</strong>
                    <br/>
                    <img className='img-fluid' src={require('../../assets/trains/43/2.jpg')} alt={caption2}/>
                    <br/>
                    <br/>
                    <strong>Below: {caption3}</strong>
                    <br/>
                    <img className='img-fluid' src={require('../../assets/trains/43/3.jpg')} alt={caption3}/>
                </div>
            </div>
        );
    }
}

const caption1 = 'A High Speed Train at Paddington Station. One of the power cars has been repainted in original livery.';
const caption2 = 'A High Speed Train at York Station.';
const caption3 = "A Class 43 and Class 91 at London King's Cross Station.";

export default Class43;