import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

class ImageEncryptor extends Component {
    render() {
        return (
            <div>
                <div class="main-text">
                    <h2>Image Encryptor</h2>
                    <strong>Hide text messages inside ordinary image files</strong>
                    <br/>
                    This program will allow you to take digital image files and encode text into them, without making any changes that are visible to the human eye.
                    <br/>
                    <br/>
                    <img src={require("../../assets/projects/imageencryptor/1.jpg")} alt="A screenshot of the program's user interface" />
                    <br/>
                    <br/>
                    <h3>How it works</h3>
                    Digital image files are made up of a grid of pixels. Each pixel has a red value, a green value, and a blue value (RGB) that can be any integer between 0-255 inclusive. Altering these values allows for any colour to be displayed; some image formats also have opacity values to allow for transparency. This program slightly alters the RGB values to make each one either even or odd; these changes are noticable to a computer but not to the human eye. The parity of each of the colour values is interpetted as either a 0 (even) or a 1 (odd), which allows for binary encoding and the storage of character values. The images that this program output are in BMP format which is uncompressed, to prevent lossy compression from corrupting the message data; converting the output images to any other format may destroy the message.
                    <br/>
                    <br/>
                    <a href="https://drive.google.com/open?id=1PlsVHe451GiJb8FqP3nseeIGvbeKsHNs"><button class="btn btn-success">Download <FontAwesomeIcon icon={faDownload} /></button></a>
                </div>
            </div>
        );
    }
}

export default ImageEncryptor;