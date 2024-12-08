export interface SearchedMovieModel {
    Search: MovieModel[];
    totalResults: string;
    Response: string;
}

export interface MovieModel {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string
}
