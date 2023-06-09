import React, { Component } from 'react';

class Counter extends Component {

  constructor(props){
    super(props);
    this.state = {
      counter: 0
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase(){
    let state = this.state;
    state.counter += 1;
    this.setState(state);
  }

  decrease(){
    let state = this.state;
    if(state.counter === 0){
      alert('it is not possible to decrease zero');
      return;
    }
    state.counter -= 1;
    this.setState(state);
  }

  render(){
    return(
      <div>
        <h1>Counter</h1>
        <p>Practicing about props and components</p>
        <h3>
          <div>
            <button onClick={this.decrease}> - </button>
              {this.state.counter} 
            <button onClick={this.increase}> + </button>
          </div>
        </h3>
      </div>
    );
  }
}

export default Counter;
