import { Component, OnInit } from '@angular/core';
import { AddUserToDbService } from 'src/app/service/add-user-to-db.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public userListData: Array<any> = [];

  constructor(public userService: AddUserToDbService) {
    this.userService.userListUpdated.subscribe(() => {
      this.getUserList();
     });
   }

  ngOnInit(): void {
    
  }

  getUserList = () => {
    this.userListData = this.userService.getUserList();
    console.log("this.userListData", this.userListData);
  }

  onItemClick = (user: Object) => {
    this.userService.updateFormData(user);
  }
}
