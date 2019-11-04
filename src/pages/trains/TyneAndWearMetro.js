import React, {Component} from 'react';

class TyneAndWearMetro extends Component {
    render() {
        return (
            <div>
                <div className='main-text'>
                    <h2>Tyne and Wear Metro</h2>
                    <br/>

                    <div className='embed-responsive embed-responsive-16by9'>
                        <iframe className='embed-responsive-item' src='https://www.youtube.com/embed/47MNTowF2OI' allowFullScreen title='A YouTube video showing Metro trains and tunnels around the network'></iframe>
                    </div>

                    <br/>
                    Known locally as simply 'The Metro', the Tyne and Wear Metro is the second most heavily used of the metro systems in the UK, serving Newcastle, Gateshead, Sunderland, South Shields and more. It was formed in 1980, the result of a construction project to build new tunnels under Newcastle and Gateshead linking to modernised Victorian surface railways. Unlike many metro systems, the trains are powered via overhead electrification.
                </div>
            </div>
        );
    }
}

export default TyneAndWearMetro;