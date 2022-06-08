import {Component, OnInit} from '@angular/core';
import {PaginationInstance} from 'ngx-pagination';
import {ActivatedRoute} from '@angular/router';

import {IMovie} from '../../interfaces';
import {IGenre} from '../../../genre/interfaces';
import {MovieService} from '../../services';
import {GenreService} from '../../../genre/services';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: IMovie[];
  genres: IGenre[];
  public config: PaginationInstance = {
    itemsPerPage: 10,
    currentPage: 1
  };

  constructor(private movieService: MovieService,
              private genreService: GenreService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.pageChanged(Number.parseInt(id) | this.config.currentPage);
    });
  }

  pageChanged(pageId: number) {
    this.config.currentPage = pageId;

    this.movieService.getGenres().subscribe(value => {
      this.genres = value.genres;
    });

    this.movieService.getAll(this.config.currentPage).subscribe(value => {
      this.movies = value.results;

      // creating array 'genres'.
      for (const movie of this.movies) {
        movie.genres = new Array<IGenre>(0);
        for (const genre_id of movie.genre_ids) {
          const genre = this.genres.find(genre => genre.id == genre_id);
          movie.genres?.push(genre as IGenre);
        }
      }

      this.config.totalItems = Math.min(5000, value.total_results);
    });
  }
}
