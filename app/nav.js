import React from 'react'
import {NavLink} from 'react-router-dom'
import A from './a'
import B from './b'
import C from './c'

import './css/nav.css'

const NavBar=()=>(
  <div>
    <NavLink exact to="/" className="nav"  activeClassName="activeNav" style={{'font-size':'20px'}}>A页面</NavLink> |&nbsp;
    <NavLink to="/b" className="nav" activeClassName="activeNav">B页面</NavLink> |&nbsp;
    <NavLink to="/c/你好/世界" className="nav" activeClassName="activeNav">C页面</NavLink> |&nbsp;
    <NavLink to="/sss" className="nav" activeClassName="activeNav">404页面</NavLink> |&nbsp;
    <NavLink to="/redirect"  activeClassName="activeNav">Redirect</NavLink>
  </div>
)

export default NavBar