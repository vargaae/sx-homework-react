import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Board from "./pages/Board";

function App() {
 
  return (
    <div className="App">
      <Nav/>
          <div className="mainframe">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/game" element={<Board />} />
            </Routes>
          </div>
    </div>
  );
}

export default App;
