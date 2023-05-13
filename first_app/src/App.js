import React, { Component } from 'react';
import Counter from './components/LifeCycle/Counter';
import Timer from './components/Timer';
import Feed from './components/Feed';
import Form from './components/Form';
import FormLogin from './components/Form/form';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counterActivated: false,
      timerActivated: false,
      feedActivated: false,
      formActivated: false,
      formLoginActivated: false,
    };

    this.activeCounter = this.activeCounter.bind(this);
    this.activeTimer = this.activeTimer.bind(this);
    this.activeFeed = this.activeFeed.bind(this);
    this.activeForm = this.activeForm.bind(this);
    this.activeLoginForm = this.activeLoginForm.bind(this);
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

  activeFeed(){
    let state = this.state;
    state.feedActivated = true;
    this.setState(state);
  }

  activeForm(){
    let state = this.state;
    state.formActivated = true;
    this.setState(state);
  }

  activeLoginForm(){
    let state = this.state;
    state.formLoginActivated = true;
    this.setState(state);
  }

  desativeAll(){
    let state = this.state;
    state.counterActivated = false;
    state.timerActivated = false;
    state.feedActivated = false;
    state.formActivated = false;
    state.formLoginActivated = false;
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
          <button onClick={this.activeFeed}> FEED </button>
          <button onClick={this.activeForm}> FORM </button>
          <button onClick={this.activeLoginForm}> LOGIN </button>
          <button onClick={this.desativeAll}> DESATIVE ALL </button>
          {
            this.state.counterActivated === true && <Counter />
          }
          {
            this.state.timerActivated === true && <Timer />
          }
          {
            this.state.feedActivated === true && <Feed />
          }
          {
            this.state.formActivated === true && <Form />
          }
          {
            this.state.formLoginActivated === true && <FormLogin />
          }
        </div>
      </div>
    );
  }
}

export default App;
