import React from "react";
import Login from "./login/login";
import Main from "./main/main";
import Register from "./register/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Index() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
