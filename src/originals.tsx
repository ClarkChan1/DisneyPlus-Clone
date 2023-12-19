import "./originals.css";
import ContentRow from "./contentRow";
import { ContentQuery, titleAndImages, DiscoverCompany } from "./types";
import { useEffect, useState } from "react";
import getPosters from "../utils/getPosters";

const contentQueries: ContentQuery[] = [
  {
    searchType: "discover",
    contentType: "movie",
    company: "Disney",
  },
  {
    searchType: "discover",
    contentType: "movie",
    company: "Walt Disney Animation Studios",
  },
  {
    searchType: "discover",
    contentType: "movie",
    company: "DisneyToon Studios",
  },
];

interface Props {
  scrollY: number;
}

function Originals(props: Props) {
  const [contentTitleAndImages, updateContentTitleAndImages] = useState<
    titleAndImages[]
  >([]);
  useEffect(() => {
    async function getData() {
      let updatedContent: titleAndImages[] = [];
      for (const contentQuery of contentQueries) {
        let contentImages = await getPosters({
          contentType: contentQuery.contentType,
          company: contentQuery.company,
        } as DiscoverCompany);
        updatedContent.push({
          title: contentQuery.company || "",
          images: contentImages,
        });
      }
      updateContentTitleAndImages(updatedContent);
    }
    getData();
  }, []);
  return (
    <div className="originals-container">
      <div className="img-container">
        <img
          className={"title-img " + (props.scrollY != 0 ? "scrolled-img" : "")}
          src="/images/originals.png"
          alt=""
        />
      </div>
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
