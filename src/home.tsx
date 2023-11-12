import { useEffect, useState } from "react";
import "./home.css";
import getPosters from "../utils/getPosters";
import { titleAndImages, ContentQuery } from "./types";
import ContentRow from "./contentRow";

const contentQueries: ContentQuery[] = [
  {
    searchType: "discover",
    contentType: "tv",
    query: "Disney Television Animation",
    title: "Disney Channel",
  },
  {
    searchType: "discover",
    contentType: "movie",
    query: "Walt Disney Animation Studios",
  },
  {
    searchType: "discover",
    contentType: "movie",
    query: "Marvel Studios",
  },
  {
    searchType: "discover",
    contentType: "movie",
    query: "Pixar",
  },
  {
    searchType: "search",
    contentType: "movie",
    query: "Star Wars",
  },
];

function Home() {
  const [contentTitleAndImages, updateContentTitleAndImages] = useState<
    titleAndImages[]
  >([]);
  useEffect(() => {
    async function getData() {
      let updatedContent: titleAndImages[] = [];
      for (const contentQuery of contentQueries) {
        let contentImages = await getPosters(
          contentQuery.searchType,
          contentQuery.contentType,
          contentQuery.query
        );
        updatedContent.push({
          title: contentQuery.title || contentQuery.query,
          images: contentImages,
        });
      }
      updateContentTitleAndImages(updatedContent);
    }
    getData();
  }, []);
  return (
    <div className="home-container">
      {contentTitleAndImages.map((entry) => (
        <ContentRow
          key={entry.title}
          title={entry.title}
          content={entry.images}
        />
      ))}
    </div>
  );
}
export default Home;
