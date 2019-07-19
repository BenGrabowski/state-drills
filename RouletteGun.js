import React from 'react';

class RouletteGun extends React.Component {
    state = {
        chamber: null,
        spinningTheChamber: false,
        message: undefined
    };

    static defaultProps = {
        bulletInChamber: 8
    };
    
    pullTrigger = () => {
        this.setState({spinningTheChamber: true,
        message: 'spinning the chamber and pulling the trigger...'});
        let timeOut = setTimeout(() => {
            this.setState({chamber: Math.ceil(Math.random() * 8)})
            this.updateMessage();
            this.setState({spinningTheChamber:false});
        }, 2000)
    }

    updateMessage(props) {
        if (this.state.chamber === this.props.bulletInChamber) {
            this.setState({message: "BANG!!!"})
        } else {
            this.setState({message: "you're safe!"})
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeOut)
    }
    
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.pullTrigger}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun