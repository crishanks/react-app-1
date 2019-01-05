import React from 'react';

class NamesSearchBar extends React.Component {
    constructor() {
        super(); //set up our context
        this.state = {items: []} //our current state is an empty array w/ the key items:
    }

    componentWillMount() {
        fetch( 'https://swapi.co/api/people/?format=json' ) //this is the api that has the data
            .then( response => response.json() ) //this fetches the data from the api and turns it into json format
            .then( (response) => this.setState({ items: response.results }) )//this updates the state items: [] and populates it with the json data we just fetched

    }

    filter(e) {
        this.setState({filter: e.target.value})
    } //this method runs with onChange. it adds a new object to the class' state called filter: whose value is set to the string value from the target (user input) that came from the onChange event

    render() {
        let items = this.state.items;
        if (this.state.filter) { //if there is a filter method (which we created above)
            items = items.filter(item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
        } //if the string item in the user input matches a string from the array of data we fetched (which is now in the state), allow it to show up in the filter: key array

        return (
            <div>
                <input type="text" onChange={this.filter.bind(this)}/>
                {items.map(item => <h4 key={item.name}>{item.name}</h4>)}
            </div> // creates an input text box with an event listener onChange. Map over each string (item) in the array in the filter: key, and render them on the DOM as h4. give each h4 a unique key of its name
        )
    }
}

export default NamesSearchBar