import React from 'react'
import {connect} from 'react-redux'
import {renderImage} from '../actions'

class ImageContainer extends React.Component{

  render(){
    //console.log(this.props.selectedLipstick);
    //console.log(this.props.selectedLipstick[this.props.selectedSkinTone + "URL"])
    console.log(this.props.selectedLipstick)
    return(
      <div class="imagescontainer">
        {/* {this.props.selectedLipstick.title} */}
        {this.props.selectedSkinTone === "medium" ? <img src={this.props.selectedLipstick["medURL"]}/> :
        <img src= {this.props.selectedLipstick[this.props.selectedSkinTone + "URL"]}/>}
      </div>
    )
  }
}



const mapStatetoProps = (state) => {
  return {
    selectedLipstick: state.selectedLipstick,
    selectedSkinTone: state.selectedSkinTone
  }
}


export default connect (mapStatetoProps) (ImageContainer);
