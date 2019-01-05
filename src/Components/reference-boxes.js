import React from 'react';

class ReferenceBoxes extends React.Component {
    constructor() {
        super();
        this.state = {
            a: 'box1',
            b: 'box2'
        }
    }

    update(event) {
        this.setState({
            a: this.refs.a.value,
            b: this.refs.b.value
        });
    }

    render() {
        return (
            <div>
                <input 
                    onChange={this.update.bind(this)}
                    ref="a"
                /> {this.state.a}
                <hr />
                <input 
                    onChange={this.update.bind(this)}
                    ref="b"
                /> {this.state.b}
            </div>
        );
    }
}

export default ReferenceBoxes