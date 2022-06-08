import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {urls} from '../../../../constants';
import {IMovie} from '../../interfaces';
import {MovieService} from '../../services';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: IMovie;
  urls: any;

  constructor(private movieService: MovieService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.urls = urls;

    this.activatedRoute.data.subscribe(({data}) => {
      this.movie = data;
    });

    this.movieService.getById('' + this.movie?.id).subscribe(value => {
      this.movie = value;
    });
  }

}
