import React, { Component } from 'react';

class App extends Component {
    render() {
        const myStyle={
            backgroundImage:
                "url('https://media.tenor.com/7HFPLm7Rl8oAAAAC/321-count-down.gif')",
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