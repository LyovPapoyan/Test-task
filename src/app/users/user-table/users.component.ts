import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddNewUserModalComponent } from '../add-new-user-modal/add-new-user-modal.component';
import * as data from '../../../assets/person.json';
import { IUser } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  public usersList!: IUser[];

  constructor(private _modal: NzModalService) {}

  ngOnInit(): void {
    this.usersList = (data as any).default;
  }

  public onAddUser(): void {
    this._modal.create({
      nzContent: AddNewUserModalComponent,
      nzTitle: 'Добавить нового клиента',
      nzOkText: 'Сохранить',
      nzCancelText: 'Отмена',
      nzOnOk: (newUser: AddNewUserModalComponent) => {
        if (newUser.userForm.invalid) {
          Object.values(newUser.userForm.controls).forEach((control) => {
            if (control.invalid) {
              control.markAsDirty();
              control.updateValueAndValidity({ onlySelf: true });
            }
          });
          return false;
        } else {
          this.usersList.push(newUser.userForm.value);
          return true;
        }
      },
    });
  }

  public onRemoveUser(index: number): void {
    this.usersList.splice(index, 1);
  }
}
