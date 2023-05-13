import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        form: {
            name: '',
            email:'',
            password:''
        }
    };

    this.dataForm = this.dataForm.bind(this);
  }

  dataForm(e) {
    let form = this.state.form;
    form[e.target.name] = e.target.value;
    this.setState({form: form});
  }

  render(){
    return(
      <div>
        <h1>Login</h1>
        <p>Practicing about forms</p>
            <label>Name: </label><br/>
                <input type='text' name='name' value={this.state.form.name} onChange={this.dataForm}/><br/><br/>
            <label>E-mail: </label><br/>
                <input type='email' name='email' value={this.state.form.email} onChange={this.dataForm}/><br/><br/>
            <label>Password: </label><br/>
                <input type='password' name='password' value={this.state.form.password} onChange={this.dataForm}/>
        <div>
            <h3>{this.state.form.name}</h3>
            <h3>{this.state.form.email}</h3>
            <h3>{this.state.form.password}</h3>
        </div>
      </div>
    );
  }
}

export default App;
