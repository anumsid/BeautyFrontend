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
  <div className="row" id="skintonerow">
    <div className="col-sm-12">
      <div>
        <p>Select your skintone!</p>
      </div>

      <form>
        <div className="radio">
          <label>
            <input onChange={this.handleChange} type="radio" name="tone" value="light" checked={this.props.selectedSkinTone === "light"}/>
            <h4 className="skinfonts">Light</h4>
          </label>
        </div>
        <div className="radio">
          <label>
            <input onChange={this.handleChange} type="radio" name= "tone" value="medium" checked={this.props.selectedSkinTone === "medium"} />
            <h4 className="skinfonts">Medium</h4>
          </label>
        </div>
        <div className="radio">
          <label>
            <input onChange={this.handleChange} type="radio" name="tone" value="dark" checked={this.props.selectedSkinTone === "dark"} />
            <h4 className="skinfonts">Dark</h4>
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
