import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  imports: [],
  templateUrl: './string-interpolation.html',
  styleUrl: './string-interpolation.css',
})
export class StringInterpolation {
name: string = "Anjali"
email: string = "anj@gmail.com"

getDisplay(){
  return "learning string interpolation"
}

Display(){
  alert("hello world")
}
}
