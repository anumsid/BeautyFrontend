import React from 'react'
import {connect} from 'react-redux'

class LipstickCard extends React.Component{
    render(){
      console.log(this.props);
      return (
        <div>
          <div>
            <button onClick={this.props.handleDetailClick}>Back</button>
          </div>

          <div>
            <p>{this.props.selectedLipstick.description}</p>
            <p>{this.props.selectedLipstick.price}</p>

            {this.props.selectedLipstick.reviews === undefined ? null :
              (<div>
                {this.props.selectedLipstick.reviews.map(review => {
                  return (
                    <div>
                      <h1>Product Reviews</h1>
                      {review.content}

                      {review.user_first}

                      {review.user_last}
                    </div>
                  )
                })
              }
            </div>)
          }

        </div>
      </div>
      )
    }
  }


  const mapStatetoProps = (state) => {
    return {
      selectedLipstick: state.selectedLipstick
    }
  }


export default connect(mapStatetoProps)(LipstickCard)
