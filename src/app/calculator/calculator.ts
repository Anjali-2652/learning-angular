import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  value: String = " ";
  num1: number | null = null;
  operator: string | null = null;
  num2Waiting: boolean = false

appendNumber(num: string){
// this.value += num ;
if(this.num2Waiting){
  this.value = num;
  this.num2Waiting = false;
}else{
  this.value = this.value === "" ? num: this.value + num;
}
}

pressOperator(op:string){
  this.num1 = Number(this.value);
  this.operator = op;
  this.num2Waiting = true;
}

clear(){
  this.value = "";
  this.num1 = null;
  this.operator = null;
  this.num2Waiting = false;
}

delete(): void{
  this.value = this.value.slice(0,-1)
}

calculate(){
if(this.num1 === null || this.operator === null) return;
const num2 = Number(this.value);
let result  = 0;
switch(this.operator){
  case "+":
    result = this.num1 + num2;
    break;
  case "-":
    result = this.num1 - num2;
    break;
  case "*":
    result = this.num1 * num2;
    break;
  case "/":
    result = this.num1 / num2;
    break;
  case "%":
    result = this.num1 % num2;
    break;
}
this.value = result.toString();
this.num1 = null;
this.operator = null;
} 
} 
