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
  company?: string;
  query?: string;
}

export interface titleAndImages {
  title: string;
  images: posterAndName[];
}

export interface DiscoverCompany {
  contentType: string;
  company: string;
}
export interface DiscoverGenre {
  contentType: string;
  genre: string;
}

export interface Search {
  contentType: string;
  query: string;
}
export interface Similar {
  contentType: string;
  id: number | string;
}

export function instanceOfDiscoverCompany(
  object: any
): object is DiscoverCompany {
  return "company" in object;
}

export function instanceOfDiscoverGenre(object: any): object is DiscoverGenre {
  return "genre" in object;
}

export function instanceOfSearch(object: any): object is Search {
  return "query" in object;
}

export function instanceOfSimilar(object: any): object is Similar {
  return "id" in object;
}
