import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Match from "./Match";

const App = () => {
    return (
      <Router basename="/predictor/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/match" element={<Match />} />
        </Routes>
      </Router>
    );
  };
  
  export default App;