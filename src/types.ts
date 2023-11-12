export interface posterAndName {
  poster_path: string;
  id: number;
  contentType: string;
}

export interface contentInfo {
  logo_path: string;
  backdrop_path: string;
  description: string;
  genres: string[];
}

export interface ContentQuery {
  searchType: string;
  contentType: string;
  query: string;
  title?: string;
}

export interface titleAndImages {
  title: string;
  images: posterAndName[];
}
