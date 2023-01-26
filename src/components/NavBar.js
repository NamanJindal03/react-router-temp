import React from 'react';


export const NavBar = () =>{
    return(
        <nav>
        <ul>
          <li>
            <NavLink className="index-link" activeClassName="active" exact to="/">
              Index
            </NavLink>
          </li>
          <li>
            <NavLink className="home-link" activeClassName="active" exact to="/home">
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    );

}