import {Component, OnInit} from '@angular/core';
import {PaginationInstance} from 'ngx-pagination';
import {ActivatedRoute} from '@angular/router';

import {environment} from "../../../../../environments/environment";
import {IMovie} from '../../interfaces';
import {IGenre} from '../../../genre/interfaces';
import {MovieService} from '../../services';
import {GenreService} from '../../../genre/services';

const {maxItems, itemsPerPage} = environment;


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: IMovie[];
  genres: IGenre[];
  genreId: number;
  public config: PaginationInstance = {
    itemsPerPage: itemsPerPage,
    currentPage: 1,
  };

  constructor(private movieService: MovieService,
              private genreService: GenreService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.genreId = id;
      this.pageChanged();
    });
    this.activatedRoute.queryParams.subscribe(({query}) => {
      this.pageChanged(undefined, query);
    });
  }

  pageChanged(event: any = undefined, query: string = "") {
    this.config.currentPage = event;
    this.genreService.getAll().subscribe(value => {
      this.genres = value.genres;
    });

    if (query != "") {
      this.movieService.search(query).subscribe(value => {
        this.config.totalItems = Math.min(maxItems, value.total_results);
        this.movies = value.results;
        this.mappingGenres();
      });
    } else {
      this.movieService.getAll(this.config.currentPage, this.genreId).subscribe(value => {
        this.config.totalItems = Math.min(maxItems, value.total_results);
        this.movies = value.results;
        this.mappingGenres();
      });
    }
  }

  mappingGenres() {
    // creating array 'genres' - for other components.
    for (const movie of this.movies) {
      movie.genres = new Array<IGenre>(0);
      for (const genre_id of movie.genre_ids) {
        const genre = this.genres?.find(genre => genre.id == genre_id);
        movie.genres?.push(genre as IGenre);
      }
    }
  }

}
