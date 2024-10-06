import React from "react";
import ReactDOM from "react-dom";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main">
      <p>I am learning React. My life is getting better</p>
    </div>
  )
  
}
React.DOM.render(<p/>,document.getElementById("main"))
React.DOM.render(<App/>,document.getElementById("root"))

export default App;
