import {Component, Input, OnInit} from '@angular/core';
import {IGenre} from "../../modules/genre/interfaces";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.css']
})
export class GenresListComponent implements OnInit {

  @Input()
  genre: IGenre;

  constructor() {
  }

  ngOnInit(): void {
  }

}
