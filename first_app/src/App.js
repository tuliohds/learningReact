import React, { Component } from 'react';
import Counter from './components/lifeCycle/Counter';
import Timer from './components/Timer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counterActivated: false,
      timerActivated: false,
    };

    this.activeCounter = this.activeCounter.bind(this);
    this.activeTimer = this.activeTimer.bind(this);
    this.desativeAll = this.desativeAll.bind(this);
  }

  activeCounter(){
    let state = this.state;
    state.counterActivated = true;
    this.setState(state);
  }

  activeTimer(){
    let state = this.state;
    state.timerActivated = true;
    this.setState(state);
  }

  desativeAll(){
    let state = this.state;
    state.counterActivated = false;
    state.timerActivated = false;
    this.setState(state);
  }

  render(){
    return(
      <div>
        <h1>My projects on React</h1>
        <p>Click on buttons below for see the developments</p>
        <div>
          <button onClick={this.activeCounter}> COUNTER </button>
          <button onClick={this.activeTimer}> TIMER </button>
          <button onClick={this.desativeAll}> DESATIVE ALL </button>
          {
            this.state.counterActivated === true && <Counter />
          }
          {
            this.state.timerActivated === true && <Timer />
          }
        </div>
      </div>
    );
  }
}

export default App;
