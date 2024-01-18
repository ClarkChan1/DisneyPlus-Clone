import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./main.css";
import Navbar from "./navbar";
import SmallNavbar from "./smallNavbar";
import Home from "./home";
import Search from "./search";
import ContentPage from "./contentPage";
import Originals from "./originals";
import WatchList from "./watchlist";
import Movies from "./movies";
import Series from "./series";
import EditProfile from "./edit-profile";
import { getProfilePic } from "../utils/handleData";
import { setProfilePic } from "../utils/handleData";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

function Main() {
  const [scrollY, updateScrollY] = useState<number>(0);
  const [profilePic, updateProfilePic] = useState<string>(getProfilePic());

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
    document.body.classList.add("main-container-body");
    return () => document.body.classList.remove("main-container-body");
  }, []);

  useEffect(() => {
    setProfilePic(profilePic);
  }, [profilePic]);

  return (
    <BrowserRouter>
      <Navbar scrollY={scrollY} profilePic={profilePic} />
      <SmallNavbar scrollY={scrollY} profilePic={profilePic} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/originals" element={<Originals scrollY={scrollY} />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route
          path="/edit-profile"
          element={<EditProfile updateProfilePic={updateProfilePic} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
