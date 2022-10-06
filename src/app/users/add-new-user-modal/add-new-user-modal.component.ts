import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-user-modal',
  templateUrl: './add-new-user-modal.component.html',
  styleUrls: ['./add-new-user-modal.component.css']
})
export class AddNewUserModalComponent implements OnInit {

  public userForm!: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this._initForm()
  }

  private _initForm() {
    this.userForm = this._fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      card: ['', Validators.required]
    })
  }

}
