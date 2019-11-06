import React, {Component} from 'react';

class TextEditor extends Component {
    render() {
        return (
            <div>
                <div className='main-text'>
                    <h2>Rich Text Editor</h2>
                    <p/>
                    <img className='img-fluid' src={require('../../assets/projects/texteditor/1.jpg')} alt="A screenshot of the program's user interface" />
                    <p/>
                    This was a very simple program that I developed to allow the editing of .rtf and .txt files.
                    It has some advanced features, including image insertion, insertion of symbols from a table, font and colour options, bulleted lists, subscripts and more.
                    <p/>
                    Below: {caption}
                    <br/>
                    <img className='img-fluid' src={require('../../assets/projects/texteditor/2.jpg')} alt={caption} />
                </div>
            </div>
        );
    }
}

const caption = 'A screenshot showing the advanced symbol insertion dialog';

export default TextEditor;