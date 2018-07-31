import React from 'react'
import LipstickItem from './LipStickItem'
import {connect} from 'react-redux'
import {handleClick} from './ImageContainer'
import LipstickCard from './LipstickCard'

class LipstickContainer extends React.Component{

  constructor(){
    super()

    this.state = {
      clicked: false
    }
  }

  handleDetailClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render(){
    //console.log(this.state)
    if(!this.state.clicked) {
      return(
        <div>
          {this.props.lipstickList.map(lipstick => {
            return <LipstickItem handleDetailClick={this.handleDetailClick} lipstick={lipstick} />
          })}
          {/* <LipstickCard /> */}
        </div>
      )
      }else {
        return <LipstickCard handleDetailClick={this.handleDetailClick}/>
      }

  }
}

const mapStatetoProps = (state) => {
  return {
    lipstickList: state.lipstickList,
    selectedLipstick: state.selectedLipstick
  }
}
export default connect(mapStatetoProps)(LipstickContainer);
