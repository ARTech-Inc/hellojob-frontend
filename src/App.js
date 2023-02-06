import logo from "./logo.svg";
import "./App.css";

import Register from "./pages/register";
import LandingPage from "./pages/landingPage";
import UserProfile from "./pages/userProfile";
import HalamanHire from "./pages/halamanHire";
import RegisterHire from "./pages/registerHire";
import LoginOption from "./pages/loginOption";
import Login from "../src/pages/login/index";
import Home from "../src/pages/home/index";
import EditProfile from "./pages/editProfile";

import configureStore from "./redux/store";

import { Provider } from "react-redux";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const { store } = configureStore();
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/userProfile/:id" element={<UserProfile />} />
            <Route path="/halamanHire" element={<HalamanHire />} />
            <Route path="/registerHire" element={<RegisterHire />} />
            <Route path="/registerOption" element={<LoginOption />} />
            <Route path="/editProfile/" element={<EditProfile />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
