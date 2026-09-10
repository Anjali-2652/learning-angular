import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-addition-example',
  imports: [ReactiveFormsModule],
  templateUrl: './addition-example.html',
  styleUrl: './addition-example.css',
})
export class AdditionExample {

  // formgroup or formcontroller is used for input operations,  " " is for default value
  form = new FormGroup(
    {
    num1: new FormControl("", Validators.required),
    num2: new FormControl("", Validators.required),
    }
);
result:number = 0;
calculate(){
this.result = Number(this.form.value.num1) + Number(this.form.value.num2)
}
}
