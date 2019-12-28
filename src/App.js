import React from 'react';
import './App.css';
import DisplaySimpson from './components/displaySimpson'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      simpson : []
     }
     
  }

  getsimpson = () => {
    // Send the request
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        console.log(data)
        this.setState({
          simpson: data[0]
        });
    });
  }

  render() { 
    return (
      <div className="App">
        <DisplaySimpson simpson={this.state.simpson}></DisplaySimpson>
        <button type="button" onClick={this.getsimpson}>Get simpson</button>
      </div>
    );
  }
}
 
export default App;