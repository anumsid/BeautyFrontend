import React from 'react'
import {connect} from 'react-redux'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import {postReview} from '../actions/index'

class LipstickCard extends React.Component{
  constructor(){
     super()
       this.state = {
         username: '',
         content: ''
       }
   }

   handleSubmit = (e) => {
     e.preventDefault();

     const newReview = {
       username: this.state.username,
       content: this.state.content
     }
     const id =  this.props.selectedLipstick.id
     this.props.postReview(newReview, id)
   }

   handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
   }


    render(){
      // console.log(this.props.selectedLipstick);
      return (
        <div>
          <div>
            <button onClick={this.props.handleDetailClick}>Back</button>
          </div>

          <div>
            <p>{this.props.selectedLipstick.description}</p>
            <p>{this.props.selectedLipstick.price}</p>
              <h1>Product Reviews</h1>

            {this.props.selectedLipstick.reviews === undefined ? null :
              (<div>
                {this.props.selectedLipstick.reviews.map(review => {
                  return (
                    <div>
                      <ul>
                      <li> * {review.content} - {review.user_first} {review.user_last} </li>
                    </ul>
                    </div>
                  )
                })
              }
            </div>)
          }

        </div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            {/* <Form.Field onChange={this.handleChange}
              id='user_first'
              control={Input}
              label='First name'
              placeholder='First name'
            /> */}
            <Form.Field onChange={this.handleChange}
              id='username'
              control={Input}
              label='Username'
              placeholder='Username'
            />
          </Form.Group>
          <Form.Field onChange={this.handleChange}
            id='content'
            control={TextArea}
            label='Opinion'
            placeholder='Opinion'
          />
          <Form.Field
            id='form-button-control-public'
            control={Button}
            content='Add Review'

          />
        </Form>
      </div>
      )
    }
  }


  const mapStatetoProps = (state) => {
    return {
      selectedLipstick: state.selectedLipstick,
      reviews: state.reviews
    }
  }


export default connect(mapStatetoProps, {postReview})(LipstickCard)
