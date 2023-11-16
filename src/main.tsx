import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import "./main.css";
import Navbar from "./navbar";
import Home from "./home";
import Search from "./search";
import ContentPage from "./contentPage";
import Originals from "./originals";
import LoginPage from "./loginPage";
const firebaseConfig = {
  apiKey: "AIzaSyDmVAswaRA1wzuDjGTDXcAyTk1WPSLaCtM",
  authDomain: "disney-plus-clone-202d6.firebaseapp.com",
  projectId: "disney-plus-clone-202d6",
  storageBucket: "disney-plus-clone-202d6.appspot.com",
  messagingSenderId: "1087004907139",
  appId: "1:1087004907139:web:1253dca12ad93be704adb6",
  measurementId: "G-KQG8RJ79X3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099");

const testLogin = async () => {
  const email = "blah@blah.test";
  const pass = "password";
  const creds = await signInWithEmailAndPassword(auth, email, pass);
  console.log("creds: ", creds);
};
// testLogin();

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

  if (user != undefined) {
    return (
      <BrowserRouter>
        <Navbar scrollY={scrollY} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/content" element={<ContentPage />} />
          <Route path="/originals" element={<Originals />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return <LoginPage />;
  }
}
