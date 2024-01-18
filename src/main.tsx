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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

function Main() {
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
    document.body.classList.add("main-container-body");
    return () => document.body.classList.remove("main-container-body");
  }, []);

  return (
    <BrowserRouter>
      <Navbar scrollY={scrollY} />
      <SmallNavbar scrollY={scrollY} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/originals" element={<Originals scrollY={scrollY} />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
