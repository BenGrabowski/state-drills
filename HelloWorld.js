import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: "world"
    };
    
    worldClick = () => {
        console.log('world was clicked');
        this.setState({who: "world"});
    }

    friendClick = () => {
        console.log('friend was clicked');
        this.setState({who: "friend"});
    }

    reactClick = () => {
        console.log('react was clicked');
        this.setState({who: "react"});
    }
    
    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={this.worldClick}>World</button>
                <button onClick={this.friendClick}>Friend</button>
                <button onClick={this.reactClick}>React</button>
            </div>
        );
    }
}

export default HelloWorld