import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      hour: '00:00:00'
    };
  }

  componentDidMount() {
    // when the app is initialized this component will be executed
    setInterval(() => {this.setState({
      hour: new Date().toLocaleTimeString()
    })}, 1000);
  }

  componentDidUpdate() {
    // when the app is reload this component will be executed
    // console.log('updating...');
  }

  render(){
    return(
      <div>
        <h1>Timer</h1>
        <p>Practicing about component lifecycle</p>
        <h1>{this.state.hour}</h1>
      </div>
    );
  }
}

export default App;
