import React from 'react'
import {connect} from 'react-redux'
import {renderImage} from '../actions'


class LipstickCard extends React.Component{


  handleClick = () => {
    this.props.renderImage(this.props.lipstick)

  }


  render(){
    console.log(this.props);
    return(

      <div class="container" onClick={this.handleClick}>
        <div className="radio">
          <label>
            <input type="radio" name="tone" value="light" checked={this.props.selectedSkinTone === "light"}/>
            {this.props.lipstick.title}
          </label>
        </div>
        <img src={this.props.lipstick.imgURL} />
        {this.props.lipstick.reviews === undefined ? null :
          (<div>
            {this.props.lipstick.reviews.map(review => {
              return (
                <div>
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
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    renderImage: (lipstick) => dispatch(renderImage(lipstick))
  }
}

export default connect (null, mapDispatchToProps)(LipstickCard);
