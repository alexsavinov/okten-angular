import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';

import {IUser} from "../../interfaces";
import {UserService, DataService} from "../../services";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  @Output()
  userEmitter = new EventEmitter<IUser>();

  constructor(private userService: UserService, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value);
  }

  catchUserEmit(userCatch: IUser): void {
    console.log('catchUserEmit', userCatch);
    this.userEmitter.emit(userCatch);
  }

  readFromStorage() {
    console.log('readFromStorage running..')
    this.dataService.storage.subscribe(value => {
      console.log('readFromStorage', value);
    });

  }
}
