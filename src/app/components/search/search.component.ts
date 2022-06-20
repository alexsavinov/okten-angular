import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {MovieService} from "../../modules/movie/services";


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  form: FormGroup;

  constructor(private movieService: MovieService, private router: Router) {
    this._createForm();
  }

  ngOnInit(): void {  }

  _createForm(): void {
    this.form = new FormGroup({
      query: new FormControl(null, [Validators.required]),
    })
  }

  save() {
    this.router.navigate(['/'], {queryParams: {query: this.form.value.query}});
  }
}
