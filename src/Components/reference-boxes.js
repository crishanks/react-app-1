import React from 'react';

class ReferenceBoxes extends React.Component {
    constructor() {
        super();
        this.state = {a: ''}
    }

    update(event) {
        return this.setState({
            a: this.refs.a.value,
            b: this.refs.b.value
        });
    }

    render() {
        return (
            <div>
                <input
                    ref="a"
                    type="text"
                    onChange={this.update.bind(this)}
                /> {this.state.a}
                <hr />
                <input
                    ref="b"
                    type="text"
                    onChange={this.update.bind(this)}
                /> {this.state.b}
            </div>
        );
    }
}

export default ReferenceBoxes