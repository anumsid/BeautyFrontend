import React from 'react'
import LipstickCard from './LipStickCard'
import {connect} from 'react-redux'
import {handleClick} from './ImageContainer'

class LipstickContainer extends React.Component{

  render(){

    return(
      <div>
        {this.props.lipstickList.map(lipstick => {
          return <LipstickCard lipstick={lipstick} />
        })}
        {/* <LipstickCard /> */}
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    lipstickList: state.lipstickList
  }
}
export default connect(mapStatetoProps)(LipstickContainer);
