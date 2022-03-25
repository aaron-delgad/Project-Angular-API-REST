import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersRequest } from 'src/app/shared/model/users.request';
import { BusinesService } from 'src/app/shared/services/busines.service';

@Component({
  selector: 'rutas2-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {

  form: FormGroup | undefined;
  hide = true;
  verifica = true;

  constructor(public dialogRef: MatDialogRef<UserModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UsersRequest,
    private readonly businesService: BusinesService
) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email,Validators.pattern(/^[a-z0-9.]{5,}@/)]),
      name: new FormControl('', [Validators.required,Validators.maxLength(150),Validators.minLength(20),Validators.pattern(/^[a-zA-ZÀ-ú ñÑ]*$/)]),
      // password: new FormControl('', [Validators.required,Validators.minLength(5),Validators.maxLength(15),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#¡¿+])[A-Za-z\d@$!%*?&#¿]{5,15}$/)]),
      password: new FormControl('', [Validators.required,Validators.minLength(5),Validators.maxLength(15),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]),
    })
  }

  onClose(): void {
    this.dialogRef.close(null);
  }

  onSave(): void {
    if (this.form?.valid) {
      const body = UsersRequest.createUser(this.form.value);
        this.businesService.getUserSave(body).subscribe(resp => {
          this.dialogRef.close(resp);
        })
        this.verifica = true;
    }else{
      this.verifica = false;
    }
  }

}
