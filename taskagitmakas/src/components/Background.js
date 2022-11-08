
import React, { Component } from 'react';

class App extends Component {
    render() {
        const myStyle={
            backgroundImage:
                "url('https://media2.giphy.com/media/3ohzdGnD5vAud1NCZW/giphy.gif?cid=ecf05e47brzrt5gfb20ih829i2rhy0m3ga1zy3e8gad8056c&rid=giphy.gif&ct=g')",
            height:'110vh',
            marginTop:'-70px',
            fontSize:'50px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        };
        return (
            <div style={myStyle}>
                <h1> geeksforgeeks </h1>
            </div>
        );
    }
}

export default App;