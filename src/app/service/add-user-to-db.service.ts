import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddUserToDbService {
  public userData :Array<Object> = [] ;
  constructor() { }
  
  userListUpdated: Subject<any> = new Subject<any>();
  updateFormFields: Subject<any> = new Subject<any>();

  addNewUser = (data: any) => {
    let a = {
      "name":data['name'], "dob": data['dob'].toLocaleString(), "address": data['address']
    };
    this.userData.push(a);
    console.log("service  this.userData:",  this.userData);
    this.userListUpdated.next({});
  }

  getUserList = () => {
    return this.userData;
  }

  updateFormData = (user : Object) => {
    this.updateFormFields.next({user})
  }
}
