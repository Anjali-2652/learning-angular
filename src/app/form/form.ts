import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  num1: Number = 0;
  num2: Number = 0;
  result: Number = 0;
  addNumbers(){
    this.result = Number(this.num1) + Number(this.num2);
  }

}
