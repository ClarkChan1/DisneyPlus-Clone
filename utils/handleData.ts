import { posterAndName } from "../src/types";
export function addToWatchlist(thumbnailInfo: posterAndName) {
  let watchlistData = JSON.parse(localStorage.getItem("watchlist") || "[]");
  watchlistData.push(thumbnailInfo);
  console.log("posterInfo: ", watchlistData);
  localStorage.setItem("watchlist", JSON.stringify(watchlistData));
}

export function getWatchlist() {
  return JSON.parse(localStorage.getItem("watchlist") || "[]");
}
