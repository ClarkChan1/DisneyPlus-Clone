import "./originals.css";
import ContentRow from "./contentRow";
import { ContentQuery, titleAndImages } from "./types";
import { useEffect, useState } from "react";
import getPosters from "../utils/getPosters";

const contentQueries: ContentQuery[] = [
  {
    searchType: "discover",
    contentType: "movie",
    query: "Disney",
  },
  {
    searchType: "discover",
    contentType: "movie",
    query: "Walt Disney Animation Studios",
  },
  {
    searchType: "discover",
    contentType: "movie",
    query: "DisneyToon Studios",
  },
];

function Originals() {
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
    <div className="originals-container">
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
export default Originals;
