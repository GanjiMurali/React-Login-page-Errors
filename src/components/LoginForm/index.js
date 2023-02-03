// Write your JS code here
import './index.css'

import {Component} from 'react'

class LoginForm extends Component {
  state = {username: '', password: ''}

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess()
    }
  }

  onChangeUserInput = event => {
    this.setState({username: event.target.value})
  }

  passwordInput = event => {
    this.setState({password: event.target.value})
  }

  userNameField = () => (
    <>
      <label className="user-name" htmlFor="username">
        USERNAME
      </label>
      <input
        className="user-name-input"
        type="text"
        id="username"
        placeholder="Username"
        onChange={this.onChangeUserInput}
      />
    </>
  )

  passwordField = () => (
    <>
      <label className="password" htmlFor="password">
        PASSWORD
      </label>
      <input
        type="password"
        id="password"
        className="password-input"
        placeholder="Password"
        onChange={this.passwordInput}
      />
    </>
  )

  render() {
    return (
      <div className="login-page-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
          alt="website login"
          className="login-page-logo"
        />
        <div className="login-card">
          <form onSubmit={this.submitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="website-logo-name"
            />
            <div className="user-name-container">{this.userNameField()}</div>
            <br />
            <div className="password-container">{this.passwordField()}</div>
            <br />
            <button className="login-button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
