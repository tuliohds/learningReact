import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email:'',
        password:''
    };

    this.register = this.register.bind(this);
  }

  register(e){
    const {name, email, password} = this.state;

    if(name !== '' && email !== '' && password !== ''){
        alert(`Name: ${name} \nEmail: ${email} \nPassword: ${password}`);
    }else{
        alert('Ops! Something is missing!');
    }

    e.preventDefault();
  }

  render(){
    return(
      <div>
        <h1>Form</h1>
        <p>Practicing about forms</p>

        <form onSubmit={this.register}>
            <label>Name: </label><br/>
                <input type='text' value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/><br/><br/>
            <label>E-mail: </label><br/>
                <input type='email' value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/><br/><br/>
            <label>Password: </label><br/>
                <input type='password' value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/><br/><br/>
            <button type='submit'>REGISTER</button>
        </form>
      </div>
    );
  }
}

export default App;
