import React from "react";
import Home from "./pages/Home";
import Toolbar from "./components/Toolbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Toolbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
