import React from "react";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
// import { Route, Switch, Link } from "react-router-dom";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
