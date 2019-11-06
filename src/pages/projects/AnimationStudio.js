import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

class AnimationStudio extends Component {
    render() {
        return (
            <div>
                <div className="main-text">
                    <h2>Animation Studio</h2>
                    <strong>Create simple greyscale animations</strong>
                    <p/>
                    <img className='img-fluid' src={require('../../assets/projects/animationstudio/1.jpg')} alt='Screenshot of the application in use' />
                    <p/>
                    This is a lightweight application which I completed as part of a school project, to produce monochrome animations using a range of editing tools and features. Written in C# for Microsoft Windows, it also has the ability to export animations in C++ code which can be compiled for use on an Arduino connected to a Nokia 3310 screen.
                    <p/>
                    <a href='https://drive.google.com/open?id=1R048DJmZxzePIMIdf61p74LFa4EwOdN6'><button className='btn btn-success'>Download <FontAwesomeIcon icon={faDownload} /></button></a>
                </div>
            </div>
        );
    }
}

export default AnimationStudio