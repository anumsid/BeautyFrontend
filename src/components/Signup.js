import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import {signupUser} from '../actions/index'
import {connect} from 'react-redux'


class Signup extends React.Component{
  constructor(){
    super()
    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      password: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault;
    const newUser = {
      user:
      {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        username: this.state.username,
        password: this.state.password
      }
    }
     this.props.signupUser(newUser)
      this.props.history.push("/login")
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(

      <div>
        <h1>No Account Yet? Signup now!</h1>
        <Form onSubmit={this.handleSubmit}>

          <Form.Field onChange={this.handleChange}>
            <label>First Name</label>
            <input placeholder='First Name' name='first_name'/>
          </Form.Field>

          <Form.Field onChange={this.handleChange}>
            <label>Last Name</label>
            <input placeholder='Last Name' name='last_name'/>

          </Form.Field>


          <Form.Field onChange={this.handleChange}>
            <label>Username</label>
            <input placeholder='Username' name='username'/>

          </Form.Field>
          <Form.Field onChange={this.handleChange}>
            <label>Password</label>
            <input placeholder='Password' name='password'/>
          </Form.Field>
          <Button type='submit'>Signup</Button>
        </Form>

      </div>
    )
  }
}

export default connect(null, {signupUser})(Signup)
