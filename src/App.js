import React, { Component } from 'react';
import './App.css'; import Header from './components/Header'
import LipstickContainer from './components/LipstickContainer'
import SkinToneContainer from './components/SkinToneContainer'
import ImageContainer from './components/ImageContainer'
import Login from './components/Login'
// import Signup from './components/Signup'
import {connect} from 'react-redux'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { Switch, withRouter } from 'react-router-dom'


import {fetchLipsticks} from './actions/index.js'

class App extends Component {
  componentDidMount(){
    this.props.fetchData()
  }

  render() {
    //console.log((this.props));
    return (
      <div className="App">
        <Header />

        {/* <Switch>
          <Route exact path= '/' component={App.js} />
          <Route exact path="/login" component={Login}/>
          {/* <Route exact path="/lipstickCard/:id" render={() => <LipStickCard card={} />} /> */}
          {/* <Route exact path="/signup" component={Signup}/> */}




        <div id="flex-holder">
          <div className="lipstick_container">
            <LipstickContainer />
          </div>

          <div className="skintone_container">
            <SkinToneContainer />
          </div>

          <div className="image_container">
            <ImageContainer />
          </div>
        </div>



      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => {
    dispatch(fetchLipsticks())
  }

})




export default connect(null, mapDispatchToProps) (App);
