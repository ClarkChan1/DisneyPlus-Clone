import { posterAndName } from "../src/types";
export function addToWatchlist(thumbnailInfo: posterAndName) {
  let watchlistData = JSON.parse(localStorage.getItem("watchlist") || "[]");
  watchlistData.push(thumbnailInfo);
  localStorage.setItem("watchlist", JSON.stringify(watchlistData));
}

export function removeFromWatchlist(thumbnailInfo: posterAndName) {
  let watchlistData = JSON.parse(localStorage.getItem("watchlist") || "[]");
  watchlistData = watchlistData.filter(
    (content: posterAndName) =>
      !(
        content.contentType == thumbnailInfo.contentType &&
        content.id == thumbnailInfo.id &&
        content.poster_path == thumbnailInfo.poster_path
      )
  );

  localStorage.setItem("watchlist", JSON.stringify(watchlistData));
}

export function getWatchlist() {
  return JSON.parse(localStorage.getItem("watchlist") || "[]");
}

export function checkWatchlist(id: number, contentType: string) {
  let watchlist = getWatchlist();
  return (
    watchlist.filter(
      (content: { id: number; contentType: string }) =>
        content.id == id && content.contentType == contentType
    ).length > 0
  );
}

export function getProfilePic(): string {
  return localStorage.getItem("profilePic") || "images/mickey.png";
}

export function setProfilePic(picPath: string) {
  localStorage.setItem("profilePic", picPath);
}
