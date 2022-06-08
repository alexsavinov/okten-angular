import {Component, OnInit} from '@angular/core';

import {IGenre} from '../../interfaces';
import {GenreService} from '../../services';


@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres: IGenre[];

  constructor(private genreService: GenreService) {
  }

  ngOnInit(): void {
    this.genreService.getAll().subscribe(value => {
      this.genres = value.genres;
    });
  }

}
