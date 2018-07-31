import React from 'react'
import Search from './Search'
import { Navbar, NavItem } from 'react-materialize';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Header extends React.Component{
  render() {
    return (
      <div>
         <Navbar brand='BEAUTY' center='true' className="nav brand-logo" right>
          <NavItem href="/">Home</NavItem>
          <NavItem href='#'>Sign Up</NavItem>
        <NavItem href="/cart">Cart</NavItem>
        </Navbar>
      </div>

    )}
}

export default Header;
