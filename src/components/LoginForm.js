import React from "react";

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  changeUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  changePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  submitForm = (event) => {
    event.preventDefault()
    if (this.state.username === '' || this.state.password === ''){
      return
    }
    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label>
            Username
            <input 
            onChange={(event) => {this.changeUsername(event)}}
            id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            onChange={(event) => {this.changePassword(event)}}
            id="password" name="password" type="password" value={this.state.password} />
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
