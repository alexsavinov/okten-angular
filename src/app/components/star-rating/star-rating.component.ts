import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  @Input()
  rating: number;
  stars: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      if (this.rating / 2 >= i + 1) {
        this.stars.push("fa fa-star checked");
      } else {
        this.stars.push("fa fa-star");
      }
    }
  }
}
