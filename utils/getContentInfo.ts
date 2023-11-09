import { contentInfo } from "../src/types";
const fetch_options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
};

interface Genre {
  id: number;
  name: string;
}

function getContentInfoUrl(id: number, contentType: string): string {
  if (contentType == "movie") {
    return `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  } else if (contentType == "tv") {
    return `https://api.themoviedb.org/3/tv/${id}?language=en-US`;
  }
  return "in getContentInfoUrl\nerror: url not found";
}
function getLogoUrl(id: number, contentType: string): string {
  if (contentType == "movie") {
    return `https://api.themoviedb.org/3/movie/${id}/images`;
  } else if (contentType == "tv") {
    return `https://api.themoviedb.org/3/tv/${id}/images`;
  }
  return "in getLogoUrl\nerror: url not found";
}
async function getContentInfo(id: number, contentType: string) {
  const contentInfo = {} as contentInfo;
  // search content info
  const contentInfoUrl = getContentInfoUrl(id, contentType);
  const contentResponse = await fetch(contentInfoUrl, fetch_options);
  const contentData = await contentResponse.json();
  console.log("contentData: ", contentData);
  contentInfo.description = contentData.overview;
  contentInfo.backdrop_path =
    "http://image.tmdb.org/t/p/w500" + contentData.backdrop_path;
  //search logo
  const logoUrl = getLogoUrl(id, contentType);
  const logoResponse = await fetch(logoUrl, fetch_options);
  const logoData = (await logoResponse.json()).logos;
  contentInfo.logo_path =
    "http://image.tmdb.org/t/p/w500" +
    logoData.find((logo: { iso_639_1: string }) => logo.iso_639_1 == "en")
      .file_path;
  //search genres TODO: cache this
  contentInfo.genres = contentData.genres.map((genre: Genre) => genre.name);
  console.log("contentInfo: ", contentInfo);
  return contentInfo;
}
export default getContentInfo;
