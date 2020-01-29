import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username : '',
      password : ''
    };
  }

  handleUsername = event => {
    debugger
    this.setState({
      username : event.target.value
    })
  }
  handlePassword = event => {
    
    this.setState({
      password : event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={() => {this.props.handleLogin(this.state)}}>
        <div>
          <label>
            Username
            <input onChange={this.handleUsername} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handlePassword} id="password" name="password" type="password" value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
