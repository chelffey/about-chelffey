import React from "react";
import Home from "./pages/Home";
import Toolbar from "./components/Toolbar";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <>
      <Toolbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
