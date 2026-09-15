import { Component } from '@angular/core';
import { Auth } from '../auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
username= '';
password = '';
errorMessage = '';
constructor(private authService: Auth, private router: Router){

}

verifyLogin(){
  this.errorMessage = '';
  this.authService.login(this.username, this.password).subscribe({
next: (res)=>{
  if(res.token){
    //token store in local storage/cookies
    localStorage.setItem('token', res.token);
    this.router.navigate(['/dashboard']);
  }else{
    this.errorMessage = "Invalid username or password";
    console.log(this.errorMessage)
  }
},

error: (err) =>{
  console.log("exception", err)
  this.errorMessage = "Invalid Username or Password";
  console.log("error", this.errorMessage)
}
  });
}
}
