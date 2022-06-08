import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {DataService} from "../../services/data.service";
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

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  emit(user: IUser) {
    this.userEmitter.emit(user);
  }

  saveToStorage() {
    this.dataService.userStorage.next(this.user);
  }
}
