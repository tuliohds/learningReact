import React, { Component } from 'react';
import Counter from './Counter';
import Timer from './Timer';

class App extends Component {

  render(){
    return(
      <div>
        <h1>My projects on React</h1>
        <div>
          <Counter />
          <Timer />
        </div>
      </div>
    );
  }
}

export default App;
