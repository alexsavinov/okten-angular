import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IUser} from "../../interfaces";



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;
  @Output()
  userEmitter = new EventEmitter<IUser>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  // getDetails(): void {
  //   this.router.navigate([this.user.id], {relativeTo: this.activatedRoute})
  // }

  emit(user: IUser) {
    this.userEmitter.emit(user);
    // this.userEmitter.emit(this.user);
  }
}
