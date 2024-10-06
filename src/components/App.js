import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main">
      <p>I am learning React. My life is getting better</p>
    </div>
  )
  React.DOM.render(<App/>,document.getElementById("main"))
}


export default App;
