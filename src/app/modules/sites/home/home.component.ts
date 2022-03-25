import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'rutas2-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formulario: FormGroup | undefined;

  constructor() { }

  ngOnInit(): void {
    this.createFormGroup();
  }

  private createFormGroup():void {
    this.formulario = new FormGroup({
      contacto: new FormControl('', [Validators.required,Validators.minLength(10),Validators.maxLength(50),Validators.pattern(/^[a-zA-ZÀ-ú ñÑ]*$/)]),
      celular: new FormControl('', [Validators.required,Validators.minLength(9),Validators.maxLength(9) ,Validators.pattern(/^[9][0-9]+$/)]),
      url: new FormControl('', [Validators.required, Validators.maxLength(100),Validators.pattern(/((https:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(http:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)/)]),
      email: new FormControl('',[Validators.required,Validators.email,Validators.pattern(/^[a-z0-9.]+@gmail+\.com/),Validators.maxLength(50)]),
    });
  }

  onRgeister(){
    if(this.formulario?.valid){
      console.log(JSON.stringify(this.formulario));
    }
  }

}
