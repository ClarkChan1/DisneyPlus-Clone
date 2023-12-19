import {
  DiscoverCompany,
  DiscoverGenre,
  Search,
  Similar,
  instanceOfDiscoverCompany,
  instanceOfDiscoverGenre,
  instanceOfSearch,
  instanceOfSimilar,
} from "../src/types";

const fetch_options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
};

async function getPosterUrl(
  search: DiscoverCompany | DiscoverGenre | Search | Similar
): Promise<string> {
  if (instanceOfDiscoverCompany(search)) {
    const company_search_response = await fetch(
      `https://api.themoviedb.org/3/search/company?query=${search.company}&page=1`,
      fetch_options
    );
    const company_data = await company_search_response.json();
    const company_entry = company_data.results.find(
      (entry: { origin_country: string }) => entry.origin_country == "US"
    );
    const company_id = company_entry.id;
    if (search.contentType == "movie") {
      return `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_companies=${company_id}`;
    } else if (search.contentType == "tv") {
      return `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_companies=${company_id}`;
    }
  } else if (instanceOfDiscoverGenre(search)) {
    if (search.contentType == "movie") {
      console.log("in movies url of getposters");
      return `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${search.genre}`;
    } else if (search.contentType == "tv") {
      return `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${search.genre}`;
    }
  } else if (instanceOfSearch(search)) {
    search.query = search.query.replace(/ /g, "%20");
    if (search.contentType == "movie") {
      return `https://api.themoviedb.org/3/search/movie?query=${search.query}&include_adult=false&language=en-US&page=1`;
    } else if (search.contentType == "tv") {
      return `https://api.themoviedb.org/3/search/tv?query=${search.query}&include_adult=false&language=en-US&page=1`;
    }
  } else if (instanceOfSimilar(search)) {
    if (search.contentType == "movie") {
      return `https://api.themoviedb.org/3/movie/${search.id}/recommendations?language=en-US&page=1`;
    } else if (search.contentType == "tv") {
      return `https://api.themoviedb.org/3/tv/${search.id}/recommendations?language=en-US&page=1`;
    }
  }
  return "in getPosterUrl\nerror: url not found";
}
async function getPosters(
  search: DiscoverCompany | DiscoverGenre | Search | Similar
) {
  const url = await getPosterUrl(search);
  const response = await fetch(url, fetch_options);
  const data = await response.json();
  const content = data.results
    .filter((content: any) => content.original_language == "en")
    .filter((content: any) => content.poster_path) // filter null values
    .map((content: { poster_path: string; id: number }) => ({
      poster_path: "http://image.tmdb.org/t/p/w500" + content.poster_path,
      id: content.id,
      contentType: search.contentType,
    }));
  return content;
}
export default getPosters;
