import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [CommonModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
isLoggedin:boolean = false;
courses = ["c", "c++", "js", "python"]
role:string = 'admin'
changeLogin(){
  this.isLoggedin = !this.isLoggedin
}
changeRole(r:string){
this.role = r;
}

// for attribute directives 
isActive: boolean = true;
hasError:boolean = false;

}
