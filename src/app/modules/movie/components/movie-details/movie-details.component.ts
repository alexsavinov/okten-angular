import {Component, OnInit} from '@angular/core';

import {IMovie} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";
import {DataService, MovieService} from "../../services";
import {IGenre} from "../../../genre/interfaces";


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: IMovie;
  // id: string;
  genres: IGenre[] | undefined;

  constructor(private movieService: MovieService,
              private activatedRoute: ActivatedRoute,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({data}) => {this.movie = data;});



    this.dataService.genresStorage.subscribe(value => {
      // this.genres = value;
      // console.log('MovieDetailsComponent readFromStorage', value);
    });

    this.movieService.getById('' + this.movie.id).subscribe(value => {
    // this.movieService.getById('453395').subscribe(value => {
      this.movie = value;
      this.genres = value.genres;
      console.log('this.movie', this.movie.genres);;
      // console.log('MovieDetailsComponent movieService.getById value', value);
      // console.log('MovieDetailsComponent movieService.getById this.movie', this.movie.videos);

      // let arr3 = this.movie.genre_ids?.map((item, i) => Object.assign({}, item, this.genres[i]));
      // console.log('arr3', arr3);
      console.log('this.movie.genre_ids', this.movie.genre_ids);
      // TODO: make merged array for genres of current movie
    });
    // this.activatedRoute.data.subscribe(({data}) => this.post = data);

  }

}
