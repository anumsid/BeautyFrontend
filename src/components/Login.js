import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import {LoginUser} from '../actions/index'
import {connect} from 'react-redux'


class Login extends React.Component{
  constructor(){
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault;
    const User = {
      // user:
      // {
        username: this.state.username,
        password: this.state.password
      // }
    }
     this.props.LoginUser(User)
     // console.log(this);
     this.props.history.push("/")
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(

      <div>
        <h1>Login</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field onChange={this.handleChange}>
            <label>Username</label>
            <input placeholder='Username' name='username'/>
          </Form.Field>
          <Form.Field onChange={this.handleChange}>
            <label>Password</label>
            <input placeholder='Password' name='password'/>
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>

      </div>
    )
  }
}

export default connect(null, {LoginUser})(Login)
