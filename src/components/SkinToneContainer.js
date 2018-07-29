import React from 'react'
import {connect} from 'react-redux'
import {changeSkinTone} from '../actions'

class SkinToneContainer extends React.Component{

  handleChange = (e) => {
    this.props.changeSkinTone(e.target.value)
  }

  render(){
    //console.log(this.props);
    return(
      <div className="container">
  <div className="row">
    <div className="col-sm-12">

      <form>
        <div className="radio">
          <label>
            <input onChange={this.handleChange} type="radio" name="tone" value="light" checked={this.props.selectedSkinTone === "light"}/>
            Light
          </label>
        </div>
        <div className="radio">
          <label>
            <input onChange={this.handleChange} type="radio" name= "tone" value="medium" checked={this.props.selectedSkinTone === "medium"} />
            Medium
          </label>
        </div>
        <div className="radio">
          <label>
            <input onChange={this.handleChange} type="radio" name="tone" value="dark" checked={this.props.selectedSkinTone === "dark"} />
            Dark
          </label>
        </div>
      </form>

    </div>
  </div>
</div>

    )
  }
}

const mapStatetoProps = (state) => {
  return {
    selectedSkinTone: state.selectedSkinTone
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeSkinTone: (skintone) => dispatch(changeSkinTone(skintone))
  }
}

export default connect (mapStatetoProps, mapDispatchToProps) (SkinToneContainer);
