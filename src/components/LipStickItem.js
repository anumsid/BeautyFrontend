import React from 'react'
import {connect} from 'react-redux'
import {renderImage} from '../actions'


class LipstickItem extends React.Component{


  handleClick = () => {
    this.props.renderImage(this.props.lipstick)

  }


  render(){
    //console.log(this.props);
    return(

      <div className="container" onClick={this.handleClick}>
        <div className="radio">
          <label>
            <input className="radio_buttons" type="radio" name="tone" value="light"/>
            {this.props.lipstick.title}
          </label>
            <button onClick={() => this.props.handleDetailClick()}>View Details</button>
        </div>
        <img className="lipstick" src={this.props.lipstick.imgURL} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    renderImage: (lipstick) => dispatch(renderImage(lipstick))
  }
}

export default connect (null, mapDispatchToProps)(LipstickItem);
