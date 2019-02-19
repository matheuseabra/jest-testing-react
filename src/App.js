import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoaded: false, data: [] }
  }

  loadFromAPI() {
    fetch()
  }

  componentDidMount() {
    //this.loadFromAPI();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h3>
            React Jest Testing 101
          </h3>  
        </header>
        <main>
          <div className="grid">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
