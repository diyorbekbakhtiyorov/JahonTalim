import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main";
import "./Styles/App.css";
import NavBar from "./Components/NavBar";
import AbouFooter from "./Pages/components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <AbouFooter />
    </div>
  );
}

export default App;
