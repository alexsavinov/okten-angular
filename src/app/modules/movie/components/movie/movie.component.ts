import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {urls} from '../../../../constants';
import {IMovie} from '../../interfaces';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input()
  movie: IMovie;
  urls: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.urls = urls;
  }

  onClick() {
    this.router.navigate([this.movie.id], {relativeTo: this.activatedRoute});
  }
}
