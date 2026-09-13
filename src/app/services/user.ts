import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {
  private userName: string = "Anjali"
  constructor(){}
    getUserName(){
      return this.userName
    }
    setUserName(name: string){
      this.userName = name
    }
  
}
