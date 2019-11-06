import React, {Component} from 'react';

class Calculator extends Component {
    render() {
        return (
            <div>
                <div className='main-text'>
                    <h2>Scientific Calculator</h2>
                    <strong>An advanced digital calculator</strong>
                    <p/>
                    <img className='img-fluid' src={require('../../assets/projects/calculator/2.jpg')} alt="A screenshot of the program's user interface" />
                    <p/>
                    The stock calculator on Windows and on Android is quite basic. That was my motivation for creating this app.
                    I wanted to create something with more powerful functions and the capability to work out more advanced sums with multiple operators at once.
                    <br/>
                    The Windows version was written in C# .NET and the Android version in Java.
                    <p/>
                    The 'STEP' button shows the user how to do a calculation step-by-step. Pressing it will advance one step in the calculation. For example:
                    <p/>
                    <img className='img-fluid' src={require('../../assets/projects/calculator/3.jpg')} alt="A screenshot of the program's user interface" />
                    <p/>
                    I have not included a download because it is not yet working entirely reliably - something which is very important for a calculator!
                </div>
            </div>
        );
    }
}

export default Calculator;