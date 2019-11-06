import React, {Component} from 'react';

class Railcrafter extends Component {
    render() {
        return (
            <div>
                <div className='main-text'>
                    <h2>Railcrafter Train Simulator</h2>
                    I spent a couple of years creating and testing an experimental train simulator by the name of Railcrafter. 
                    I intended to release it as an open-source project to allow other railfans to expand and contribute towards it.
                    It was programmed in C++, and was based on the Irrlicht real-time 3D rendering engine, with the IrrSound package for audio.
                    The name 'Railcrafter' was chosen to reflect the way in which user-generated content was to be the soul of it - users could 'craft' their own experiences.
                    <p/>
                    Below: {caption1} <br/>
                    <img className='img-fluid' src={require('../../assets/projects/railcrafter/1.jpg')} alt={caption1} />
                    <p/>
                    
                    Below: {caption2} <br/>
                    <img className='img-fluid' src={require('../../assets/projects/railcrafter/2.jpg')} alt={caption2} />
                    <p/>
                    Two years is a long time and considerable progress was made. The following was achieved:
                    <ul>
                        <li>Creation of textured 3D models for track, a couple of trains, signals and a little scenery</li>
                        <li>Experimentation with b-spline algorithm for plotting train track curves</li>
                        <li>Experimentation with 3D sound effects</li>
                        <li>Lighting effects such as cast shadows and lens flares</li>
                        <li>Partial construction of an editor to allow users to create their own decorated train layouts</li>
                    </ul>
                    <br/>
                    Ultimately, the project was abandoned. Perhaps not forever, for I still have the files. But why?
                    Well, the Irrlicht engine was an early 2000s application which was not optimised for modern hardware,
                    which meant that FPS was poor despite only around 10% CPU / GPU utilisation. Furthermore,
                    it was quite limited by modern standards, requiring community extensions to use many features which other engines have built-in.
                    It became clear that complete reconstruction on a modern engine would be the only way forward to meet my ambitions for the game, which I did not attempt.
                    <br/>
                    However, on the plus side the engine was lightweight in size and taught me much about 3D rendering.
                </div>
            </div>
        );
    }
}

const caption1 = "Screenshot of the game during early testing, showing a steam train model on tracks";
const caption2 = "Screenshot of foliage models being rendered alongside animated signal models";

export default Railcrafter;