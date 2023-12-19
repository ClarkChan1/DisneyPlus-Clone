import { useEffect, useState } from "react";
import "./home.css";
import getPosters from "../utils/getPosters";
import { titleAndImages, ContentQuery, DiscoverCompany, Search } from "./types";
import ContentRow from "./contentRow";

const contentQueries: ContentQuery[] = [
  {
    searchType: "discover",
    contentType: "tv",
    company: "Disney Television Animation",
  },
  {
    searchType: "discover",
    contentType: "movie",
    company: "Walt Disney Animation Studios",
  },
  {
    searchType: "discover",
    contentType: "movie",
    company: "Marvel Studios",
  },
  {
    searchType: "discover",
    contentType: "movie",
    company: "Pixar",
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
        let contentImages;
        if (contentQuery.searchType === "search") {
          contentImages = await getPosters({
            contentType: contentQuery.contentType,
            query: contentQuery.query,
          } as Search);
        } else if (contentQuery.searchType === "discover") {
          contentImages = await getPosters({
            contentType: contentQuery.contentType,
            company: contentQuery.company,
          } as DiscoverCompany);
        }
        updatedContent.push({
          title:
            contentQuery.query || contentQuery.company || "error, no title",
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
