import React from "react";
import ReactDOM from "react-dom";
import Spinningmain from "./spinningmain/Spinningmain.jsx";
import Spinningwheel from "./spinningwheel/Spinningwheel.jsx";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


class App extends React.Component {


  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL} >
      <Routes>

          <Route path="/" element={<Spinningmain/>} /> 
          <Route path="/BGTspinwheel/bgdspinner" element={<Spinningwheel/>} /> 
        
      </Routes>
    </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
