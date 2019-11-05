import React from "react";


const NavBar = props => (
  <header>
    <nav>
      <p title="Home">The Game</p>
      <p> Status: {props.status}</p>
      <p title="Store">Score: {props.currentScore}</p>
      <p title="Contact">Top Score: {props.topScore}</p>
    </nav>
  </header>
)

export default NavBar;