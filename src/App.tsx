import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HooksRef from "./components/Refs/hooksRef";
interface Props {}

function App({}: Props): React.ReactElement {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HooksRef />} />
      </Routes>
    </Router>
  );
}

export default App;
