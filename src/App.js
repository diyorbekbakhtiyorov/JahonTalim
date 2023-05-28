import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import AboutUs from "./Pages/AboutUs";
import "./Styles/App.css";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
