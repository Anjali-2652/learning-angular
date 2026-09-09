import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {
form = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email])
});

info(){
  alert("email id :"+( this.form.value.email))
}
}
