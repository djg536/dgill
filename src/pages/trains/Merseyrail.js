import React, {Component} from 'react';

class Merseyrail extends Component {
    render() {
        return (
            <div>
                <div className='main-text'>
                    <h2>Merseyrail</h2>
                    <br/>

                    <div className='embed-responsive embed-responsive-16by9'>
                        <iframe className='embed-responsive-item' src='https://www.youtube.com/embed/67BIoEHTdnA' allowFullScreen title='A YouTube video featuring some rides on Merseyrail trains'></iframe>
                    </div>
 
                    <br/>
                    Merseyrail is a commuter rail network serving the Liverpool region. It is the combined result of historic railways and tunnels being modernised and new tunnels built in the 1970s. The network is the only place in the UK to use third rail electrification outside of the South London region. The central core of the network is underground, with many metro style underground stations, but the service is much more of a commuter service as shown by the high back seating in trains.
                </div>
            </div>
        );
    }
}

export default Merseyrail;