import React from 'react'
import Search from './Search'
import { Navbar, NavItem } from 'react-materialize';
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Header extends React.Component{
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.user.id === undefined ? (<div>
           <Navbar brand='SWATCH3R' center='true' className="nav brand-logo" right>
            <NavItem href="/">Home</NavItem>
            <NavItem href='/signup'>Sign Up</NavItem>
            <NavItem href='/login'>Login</NavItem>
          {/* <NavItem href="/cart">Cart</NavItem> */}
          </Navbar>
        </div>) : (  <div>
             <Navbar brand='SWATCH3R' center='true' className="nav brand-logo" right>
              <NavItem href="/">Home</NavItem>
              {/* <NavItem href='/signup'>Sign Up</NavItem> */}
              <NavItem href='/'>Logout</NavItem>
            {/* <NavItem href="/cart">Cart</NavItem> */}
            </Navbar>
          </div>)}

      </div>


    )}
}

const mapStatetoProps = (state) => {
  return{
    user: state.user
  }
}

export default connect(mapStatetoProps)(Header);
