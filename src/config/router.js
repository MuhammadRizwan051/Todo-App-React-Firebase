import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../screen/login";
import Signup from "../screen/signup";
import Home from "../screen/home";
import Todos from "../screen/todos";

function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="todos" element={<Todos />} />
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
