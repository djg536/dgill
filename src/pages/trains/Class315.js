import React, {Component} from 'react';

class Class315 extends Component {
    render() {
        return (
            <div>
                <h1>British Rail Class 315 EMU</h1>
                These trains may not be the most comfortable or classy, being suburban commuter vehicles dating from the early 1980s. However, I love the cool 'metro' asthetic that they have, from their low roofs, low-back seating and simple hopper window designs. Unlike most other trains at the time, they are bodied with aluminium rather than the heavier steel to allow the fast accelerations needed on dense commuter lines, but only have a top speed of 75 MPH. They are the last type of train to be based on the 1972 BR standard EMU design, and are due to be replaced on the Shenfield Metro services with Crossrail Class 345s and on the Lea Valley Lines with London Overground Class 710s.
                <br/>
                <br/>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/BG5PsQF0Ki8" allowFullScreen></iframe>
                </div>		
                <br/>
                <br/>
                <strong>Below: London Overground Class 315 at Cheshunt</strong>
                <br/>
                <img class="img-fluid" src={require("../../assets/trains/315/1.jpg")} />
                <br/>
                <br/>
                <strong>Below: London Overground Class 315 Interior stationed at Cheshunt</strong>
                <br/>
                <img class="img-fluid" src={require("../../assets/trains/315/2.jpg")} />
            </div>
        );
    }
}

export default Class315;