import React from "react";

export default class LoginForm extends React.Component {

    state = {
      username: '',
      password: ''
    }

  handle_form_change = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handle_submit = (event) => {
    event.preventDefault()

    if (!this.state.username || !this.state.password) return

    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handle_submit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handle_form_change} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handle_form_change} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    )
  }
}
