import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

  count = 0

  handleIncrement(){
   this.count=  this.count +1
  }
   handleDecrement(){
   this.count=  this.count -1
  }
   handleReset(){
   this.count=  0
  }


}
