import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  value: String = "";

appendNumber(input: string){
this.value += input ;
}

clear(): void{
  this.value = ""
}

delete(): void{
  this.value = this.value.slice(0,-1)
}

calculate(): void{
  try{
    this.value = eval(this.value as string).toString();
  }catch{
    this.value = "Error"
  }
}

}
