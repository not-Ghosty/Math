import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Content from "./Content";
import Navbar from "./Navbar";
import Perfect from "./actions/Perfect";
import Welcome from "./Welcome";
import Strong from "./actions/Strong";
import Armstrong from "./actions/Armstrong";
import Prime from "./actions/Prime.jsx";
import Disarium from "./actions/Disarium";
import Xylem from "./actions/Xylem";
import Palindrome from "./actions/Palindrome";
import Factorial from "./actions/Factorial";
import Dayfinder from "./actions/Dayfinder";

const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/content" element={<Content />} />
          <Route path="/perfect" element={<Perfect />} />
          <Route path="/strong" element={<Strong />} />
          <Route path="/armstrong" element={<Armstrong />} />
          <Route path="/prime" element={<Prime />} />
          <Route path="/disarium" element={<Disarium />} />
          <Route path="/xylem" element={<Xylem />} />
          <Route path="/palindrome" element={<Palindrome />} />
          <Route path="/factorial" element={<Factorial />} />
          <Route path="/dayfinder" element={<Dayfinder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
