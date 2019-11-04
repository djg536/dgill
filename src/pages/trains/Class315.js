import React, {Component} from 'react';

class Class315 extends Component {
    render() {
        return (
            <div>
                <div className='main-text'>
                    <h1>British Rail Class 315 EMU</h1>
                    These trains may not be the most comfortable or classy, being suburban commuter vehicles dating from the early 1980s. However, I love the cool 'metro' asthetic that they have, from their low roofs, low-back seating and simple hopper window designs. Unlike most other trains at the time, they are bodied with aluminium rather than the heavier steel to allow the fast accelerations needed on dense commuter lines, but only have a top speed of 75 MPH. They are the last type of train to be based on the 1972 BR standard EMU design, and are due to be replaced on the Shenfield Metro services with Crossrail Class 345s and on the Lea Valley Lines with London Overground Class 710s.
                    <br/>
                    <br/>
   
                    <div className='embed-responsive embed-responsive-16by9'>
                        <iframe className='embed-responsive-item' src='https://www.youtube.com/embed/BG5PsQF0Ki8' allowFullScreen title='A video of Class 315s on the Shenfield to London stopper service, including a couple of rides'></iframe>
                    </div>	
 
                    <br/>
                    <br/>
                    <strong>Below: {caption1}</strong>
                    <br/>
                    <img className='img-fluid' src={require('../../assets/trains/315/1.jpg')} alt={caption1} />
                    <br/>
                    <br/>
                    <strong>Below: {caption2}</strong>
                    <br/>
                    <img className='img-fluid' src={require('../../assets/trains/315/2.jpg')} alt={caption2} />
                </div>	
            </div>
        );
    }
}

const caption1 = 'London Overground Class 315 at Cheshunt';
const caption2 = 'London Overground Class 315 Interior stationed at Cheshunt';

export default Class315;