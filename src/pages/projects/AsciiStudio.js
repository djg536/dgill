import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

class AsciiStudio extends Component {
    render() {
        return (
            <div>
                <h2>ASCII Art Studio</h2>
                <strong>Have fun converting standard image files to awesome ASCII Art!</strong>
                <br/>
                This program allows you to convert most images into ASCII art. It has the option to colour the characters, which can then be copied and used elsewhere. Images are converted into characters by calculating the brightness of the pixels and then selecting a character occupying a similar area. One of the best features is the ability to set the character background colours, which can be used like pixels to represent the image almost perfectly. Be cautious when choosing very large images and setting the quality setting to very high since the program will take a long time to compute. 
                <br/>
                <br/>
                <a href="https://drive.google.com/open?id=1spVt9Fqa8WAG8WwUgfbcgafFiApFQRt0"><button class="btn btn-success">Download <FontAwesomeIcon icon={faDownload} /></button></a>
            </div>
        );
    }
}

export default AsciiStudio;