export type TmdbDiscoverMovie = {
  id: number;
  vote_average: number;
  vote_count: number;
  adult: boolean;
};

export type TmdbDiscoverResponse = {
  page: number;
  total_pages: number;
  results: TmdbDiscoverMovie[];
};

export type TmdbMovieDetails = {
  id: number;
  title: string;
  original_title: string;
  overview?: string;
  tagline?: string;
  genres: Array<{ id: number; name: string }>;
  release_date?: string;
  popularity: number;
  adult: boolean;
  vote_average: number;
  vote_count: number;
};

export type TmdbCastMember = {
  id: number;
  name?: string;
  character?: string;
  order?: number;
};

export type TmdbCreditsResponse = {
  id: number;
  cast: TmdbCastMember[];
};
