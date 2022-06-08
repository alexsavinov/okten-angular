import {Component, OnInit} from '@angular/core';

import {IMovie} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../services";
import {IGenre} from "../../../genre/interfaces";
import {urls} from "../../../../constants";


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: IMovie;
  // genres: IGenre[] | undefined;
  urls: any;

  constructor(private movieService: MovieService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.urls = urls;

    this.activatedRoute.data.subscribe(({data}) => {
      this.movie = data;
    });

    this.movieService.getById('' + this.movie.id).subscribe(value => {
      this.movie = value;
      // this.genres = value.genres;
    });
  }

}
