import { NgStyle, NgClass, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {
  isActive:boolean = false;
  selectedRole: 'employee' | 'hirer' = 'employee'

changeState(){
  this.isActive = !this.isActive
}
form = new FormGroup({
  firstName: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required, Validators.email])
});

info(){
  alert("email id :"+( this.form.value.email))
}
}
