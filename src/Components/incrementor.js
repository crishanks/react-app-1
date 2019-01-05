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
    }

    render() {
        console.log("render");
        return (
            <div>
                <button onClick={this.update}>{this.state.val}</button>
            </div>
        );
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillUnmount() {
        console.log('componenteWillUnmount')
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