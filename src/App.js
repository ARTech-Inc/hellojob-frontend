import logo from "./logo.svg";
import "./App.css";

import Register from "./pages/register";
import LandingPage from "./pages/landingPage";
import UserProfile from "./pages/userProfile";

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
            <Route path="/register" element={<Register />} />
            <Route path="/userProfile" element={<UserProfile />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
