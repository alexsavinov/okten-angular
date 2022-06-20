import {Component, Input, OnInit} from '@angular/core';

import {urls} from '../../constants';
import {IGenre} from '../../modules/genre/interfaces';


@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.css']
})
export class GenresListComponent implements OnInit {

  @Input()
  genre: IGenre;
  urls: any;

  constructor() {
  }

  ngOnInit(): void {
    this.urls = urls;
  }

}
