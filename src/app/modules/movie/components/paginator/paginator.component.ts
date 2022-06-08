import {Component, OnInit} from '@angular/core';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {DataService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  page: number = 1;
  // p: number = 1;
  total_pages: number = 1;
  disabledPrevious: string;
  disabledNext: string;

  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // console.log('this.dataService.page', this.dataService.page);
    // console.log('this.dataService.total_pages', this.dataService.total_pages);

    this.dataService.page.subscribe(value => {
      // console.log('page', value);
      this.page = value;
      this.setAccessibility(this.page);
    });
    this.total_pages = this.dataService.total_pages;

  }

  onClick(page: number): void {
    this.setAccessibility(page);

    // console.log('onClick', page);
    this.page = Math.min(Math.max(1, page), this.total_pages);
    this.dataService.page.next(this.page);

    // this.router.navigate(['/movies'], { relativeTo: this.activatedRoute });
  }

  setAccessibility(page: number): void {
    if (page <= 1) {
      this.disabledPrevious = "disabled";
      this.disabledNext = "";
    } else if (page >= this.total_pages) {
      this.disabledPrevious = "";
      this.disabledNext = "disabled";
    } else {
      this.disabledPrevious = "";
      this.disabledNext = "";
    }
  }

}
