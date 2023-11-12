import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./main.css";
import Navbar from "./navbar";
import Home from "./home";
import Search from "./search";
import ContentPage from "./contentPage";
import Originals from "./originals";

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
}
