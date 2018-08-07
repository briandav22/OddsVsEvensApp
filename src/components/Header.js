import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


const Header = () => (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<NavLink to="/" className ="navbar-brand">Odds vs Evens</NavLink>
      
<div class="collapse navbar-collapse" id="navbarNav">
<ul class="navbar-nav">
  <li class="nav-item">
      <NavLink to="/easy" className ="nav-link">Play Easy Mode</NavLink>
  </li>
  <li class="nav-item">
      <NavLink to="/hard" className ="nav-link">Play Hard Mode</NavLink>
    </li>
  </ul>
</div>

</nav>
);





export default Header 