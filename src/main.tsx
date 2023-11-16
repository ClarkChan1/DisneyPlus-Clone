import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged, User } from "firebase/auth";
import "./main.css";
import Navbar from "./navbar";
import Home from "./home";
import Search from "./search";
import ContentPage from "./contentPage";
import Originals from "./originals";
import LoginPage from "./loginPage";
import { initializeFirebase, auth } from "../utils/firebase";
import ProtectedRoute from "./protectedRoute";

initializeFirebase();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

function Main() {
  const [user, updateUser] = useState<User>();
  const [scrollY, updateScrollY] = useState<number>(0);
  const handleScroll = () => {
    const position = window.scrollY;
    updateScrollY(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        updateUser(user);
        console.log("user: ", user);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      {user != undefined ? <Navbar scrollY={scrollY} /> : null}
      <Routes>
        <Route
          path="/"
          element={user != undefined ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/search"
          element={
            <ProtectedRoute user={user}>
              <Search />
            </ProtectedRoute>
          }
        />
        <Route
          path="/content"
          element={
            <ProtectedRoute user={user}>
              <ContentPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/originals"
          element={
            <ProtectedRoute user={user}>
              <Originals />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
