import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: "this is the state text",
      cat: 0
    }
  }

  update(event) {
    this.setState({txt: event.target.value})
  }

  render() {
    return (
      <div>
        <input type="text"
          onChange={this.update.bind(this)}/>
        <h1>{this.state.txt} - {this.state.cat}</h1>
      </div>
    )
  }
}

export default App