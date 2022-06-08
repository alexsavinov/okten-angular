import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from "../../interfaces";
import {IGenre} from "../../../genre/interfaces";
// import {DataService} from "../../services";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {urls} from "../../../../constants";
// import {FormBuilder, Validators} from "@angular/forms";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";

// import {MatSta}

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input()
  movie: IMovie;
  @Input()
  genres: IGenre[];
  // merged: IGenre[] | undefined;
  merged: any;
  urls: any;
  cardStyle: {};

  // urls: {};

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.urls = urls;
    // console.log("this.movie.genres", this.movie.genre_ids);

    // let cardStyle = {width: settings.widthCard + 'px', backgroundColor: 'white', borderColor: 'white'};
    this.cardStyle = {width: '180px', backgroundColor: 'white', borderColor: 'white'};
    // if (isDarkMode) {
    //     cardStyle.backgroundColor = 'lightgrey';
    //     cardStyle.borderColor = 'lightgrey';
    // }

    // this.dataService.genresStorage.subscribe(value => {
    //   this.genres = value;
    //   // console.log('MovieComponent genresStorage.genres', value);
    // });

    // if (this.movie.genre_ids) {
    //   // this.merged = this.movie.genre_ids.map(genreId => this.genres.find(el => el.id === genreId));
    // }
    // genres.map(genre => genre && {genre.id});
  }

  onClick() {
    // console.log(this.movie.id);
    // this.router.navigate(['items'], { relativeTo: this.route });
    this.router.navigate([this.movie.id], {relativeTo: this.activatedRoute});
  }
}
