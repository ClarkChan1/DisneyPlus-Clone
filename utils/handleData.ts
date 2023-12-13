import { posterAndName } from "../src/types";
export function addToWatchlist(thumbnailInfo: posterAndName) {
  let watchlistData = JSON.parse(localStorage.getItem("watchlist") || "[]");
  console.log("in addtowatchlist, current watchlist: ", watchlistData);
  watchlistData.push(thumbnailInfo);
  localStorage.setItem("watchlist", JSON.stringify(watchlistData));
}

export function removeFromWatchlist(thumbnailInfo: posterAndName) {
  let watchlistData = JSON.parse(localStorage.getItem("watchlist") || "[]");
  console.log("in removefromwatchlist, current watchlist: ", watchlistData);
  watchlistData = watchlistData.filter(
    (content: posterAndName) =>
      !(
        content.contentType == thumbnailInfo.contentType &&
        content.id == thumbnailInfo.id &&
        content.poster_path == thumbnailInfo.poster_path
      )
  );
  console.log(
    "in removefromwatchlist, current watchlist AFTER REMOVE: ",
    watchlistData
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
