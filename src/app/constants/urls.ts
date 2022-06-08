import {environment} from "../../environments/environment";

const {API, ImagesAPI} = environment;

export const urls = {
  movies: `${API}/discover/movie`,
  genres: `${API}/genre/movie/list`,
  images300: `${ImagesAPI}/w300`,
  images500: `${ImagesAPI}/w500`,
  movie: `${API}/movie`,
}
