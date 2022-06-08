import {Component, Input, OnInit} from '@angular/core';
import {IGenre, IMovie} from "../../interfaces";
import {DataService} from "../../services";
import {MovieService} from "../../services";
import {GenreService} from "../../../genre/services";
import {ActivatedRoute} from "@angular/router";
import {PaginationInstance} from "ngx-pagination";

// import {newArray} from "@angular/compiler/src/util";
// import {newArray} from "@angular/compiler/src/util";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: IMovie[];
  genres: IGenre[];
  genre: IGenre;
  page: number;
  // total_results: number;
  // total_pages: number;
  // p: number = 1;
  public config: PaginationInstance = {
    // id: 'advanced',
    itemsPerPage: 10,
    currentPage: 1
  };


  // id: string;

  constructor(private movieService: MovieService,
              private genreService: GenreService,
              private dataService: DataService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log('MoviesComponent ngOnInit');

    // this.activatedRoute.data.subscribe(({data}) => {
    //   this.genre = data;
    //   console.log('this.genre', data);
    // });

    // this.dataService.page.subscribe(value => {
    //   this.page = value;
    // });


    this.activatedRoute.params.subscribe(({id}) => {
      // console.log(this.genres);
      // console.log('id', id);
      this.pageChanged(Number.parseInt(id) | this.config.currentPage);

      // this.movieService.getAll(this.config.currentPage, Number.parseInt(id)).subscribe(value => {
      //   this.movies = value.results;
      //   // this.dataService.page.next(value.page);
      //   // this.dataService.total_pages = value.total_pages;
      //   // this.dataService.total_results = Math.min(500, value.total_results);
      //
      //   this.config.currentPage = value.page;
      //   this.config.totalItems = Math.min(5000, value.total_results);
      //   // console.log(this.movies);
      //   //             state.movies = action.payload.movies;
      //   //     state.page = action.payload.page;
      //   //     state.total_pages = action.payload.total_pages;
      //   console.log('this.movieService.getAll', value);
      //
      // });

    });


  }

  pageChanged(pageId: number) {
    // this.page = pageId;
    this.config.currentPage = pageId;
    // console.log(this.page);


    // this.movieService.getGenres().subscribe(value => this.genres = value.genres);
    this.movieService.getGenres().subscribe(value => {
      this.genres = value.genres;
      // console.log(value.genres);
      // this.dataService.genresStorage.next(this.genres);
      // console.log('MoviesComponent this.genres', this.genres);
    });


    this.movieService.getAll(this.config.currentPage).subscribe(value => {
      // console.log(this.genres);
      this.movies = value.results;
      for (const movie of this.movies) {
        movie.genres = new Array<IGenre>(0);
        // console.log(movie.genre_ids);
        for (const genre_id of movie.genre_ids) {
          // console.log('genre_id', genre_id);
          const genre = this.genres.find(genre => genre.id == genre_id);
          // if (genre != undefined && movie != undefined)  {
          movie.genres?.push(genre as IGenre);
          // console.log(movie.genres?.length);
          // movie.genres?.push({id: 14, name: "Fan"} as IGenre);
          // }
        }
      }


      // this.dataService.page.next(value.page);
      // this.dataService.total_pages = value.total_pages;
      // this.dataService.total_results = value.total_results;

      this.config.totalItems = Math.min(5000, value.total_results);
    });
  }
}
