import {environment} from "../../environments/environment";

const {API} = environment;

export const urls = {
  users: `${API}/users`,
  posts: `${API}/posts`,
  comments: `${API}/comments`,
  movies: `https://api.themoviedb.org/3/discover/movie`,
  genres: `https://api.themoviedb.org/3/genre/movie/list`,
  images300: 'https://image.tmdb.org/t/p/w300',
  images500: 'https://image.tmdb.org/t/p/w500',
  movie: 'https://api.themoviedb.org/3/movie',
}
