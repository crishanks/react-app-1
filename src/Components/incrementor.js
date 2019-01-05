import React from 'react';
import ReactDOM from 'react-dom';

class Incrementor extends React.Component {
    constructor() {
        super();
        this.state = {val: 0}
        this.update = this.update.bind(this)
    }

    update() {
        this.setState({val: this.state.val + 1})
    }

    componentWillMount() {
        console.log('componentWillMount')
        this.setState({m: 2}) //intercepting the render function
    }

    render() {
        console.log("render");
        return (
            <div>
                <button onClick={this.update}>
                {this.state.val * this.state.m}
                </button>
            </div>
        );
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.inc = setInterval(this.update, 500)
    }

    componentWillUnmount() {
        console.log('componenteWillUnmount')
        clearInterval(this.inc)
    }
}

class Wrapper extends React.Component {
    mount() {
        ReactDOM.render(<Incrementor />, document.getElementById('a'))
    }

    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
    }

    render() {
        return(
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>Unmount</button>
                <div id="a"/>
            </div>
        );
    }
}

export default Wrapper