import { AgeValidator } from './../../utils/AgeValidator';
import { NameValidator } from './../../utils/NameValidator';
import { Component, OnInit } from '@angular/core';
import { AddUserToDbService } from 'src/app/service/add-user-to-db.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  title = 'Expense Manager';

  public myForm: FormGroup;

  constructor(public userService: AddUserToDbService, private formBuilder: FormBuilder) {
    this.myForm = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), NameValidator.noWhiteSpace]],
      dob: ['', [Validators.required, AgeValidator.calculateAge]],
      address: ['', []]
    });

    this.userService.updateFormFields.subscribe((data) => {
      this.myForm.patchValue({...data.user})
     });
  }

  ngOnInit() {
  }

  cancel() {
    this.myForm.reset();
  }

  get m() {
    return this.myForm.controls;
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.userService.addNewUser(this.myForm.value);
  }
}
