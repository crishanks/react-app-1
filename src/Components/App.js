import React from 'react';
import HeartButton from './heart-button';
import CurrentEvent from './current-event';
import ReferenceBoxes from './reference-boxes';
import Incrementor from './incrementor';
import NamesSearchBar from './names-search-bar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: "this is the state text",
    }
  }

  update(event) {
    this.setState({txt: event.target.value})
  }

  render() {
    return (
      <div className='app'>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)} />
        <HeartButton />
        <CurrentEvent />
        <ReferenceBoxes />
        <Incrementor />
        <NamesSearchBar />
      </div>
    )
  }
}

const Widget = (props) => 
  <input type="text" onChange={props.update}/>

export default App