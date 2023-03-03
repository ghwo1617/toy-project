import React, { useState, Components } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import AppRouter from "./Router";
import SelectMenu from "./SelectMenu";
import firebase from "../fbase";

export default function App({ Components, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <>
      <NavBar/>
      <AppRouter isLoggedIn={isLoggedIn} />
    </>
  );
}