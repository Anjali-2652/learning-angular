import { NgStyle, NgClass, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators , 
  FormGroup
} from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
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

// for registration logic .. 
employeeForm : FormGroup;
hirerForm: FormGroup;

constructor(private fb: FormBuilder){
  this.employeeForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    phoneNo: ['', Validators.required],
    gender: ['', Validators.required],
    address: ['', Validators.required],
    password: ['', Validators.required, Validators.minLength(6)],
    confirmPassword: ['', Validators.required],
  });

  this.hirerForm = this.fb.group({
    complanyName: ['', Validators.required],
    contactPerson: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    phoneNo: ['', Validators.required],
    gender: ['', Validators.required],
    address: ['', Validators.required],
    password: ['', Validators.required, Validators.minLength(6)],
    confirmPassword: ['', Validators.required],
  })
}

selectEmployee(): void{
  this.selectedRole = 'employee'
}

selectHirer(): void{
  this.selectedRole = 'hirer'
}

// check if form is valid .. 
registerEmployee(): void{
  if(this.employeeForm.invalid){
    this.employeeForm.markAllAsTouched();
    return;
  }

  // get form data .. 
  const employeeData = this.employeeForm.value;
  console.log('Employee Registered: ')
  console.log(employeeData);
}

registerHirer(): void{
  if(this.hirerForm.invalid){
    this.hirerForm.markAllAsTouched();
    return;
  }

  // get form data .. 
  const hirerData = this.hirerForm.value;
  console.log("hirer registered: ")
  console.log(hirerData)
}


// employee form validation.. 
employeeFieldInvalid(fieldName: string): boolean {
  const field = this.employeeForm.get(fieldName)

  return !!(
    field &&
    field.invalid &&
    field.touched
  );
}

// hirer form validation .. 
hirerFieldInvalid(fieldName: string): boolean {
  const field = this.hirerForm.get(fieldName)

  return !!(
    field &&
    field.invalid &&
    field.touched
  );
}

employeePasswordMatch(): boolean{
  const password = this.employeeForm.get('password')?.value;
  
  const confirmPassword =  this.employeeForm.get('confirmPassword')?.value;
  return password === confirmPassword
}

hirerPasswordMatch(): boolean{
  const password = this.hirerForm.get('password')?.value;
  
  const confirmPassword =  this.hirerForm.get('confirmPassword')?.value;
  return password === confirmPassword
}
}
