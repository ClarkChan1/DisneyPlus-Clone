async function getPosters(url: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
    },
  };
  const response = await fetch(url, options);
  const data = await response.json();
  const posters = data.results
    .map((movie: { poster_path: any }) => movie.poster_path)
    .filter((movie: any) => movie);
  let imageUrls = posters.map(
    (poster: string) => "http://image.tmdb.org/t/p/w500" + poster
  );
  return imageUrls;
}
export default getPosters;
