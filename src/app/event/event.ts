import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  imports: [],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class EventLearn {

  handleEvent(event:any){
    console.log("Event clicked", event.type)
    console.log("Event clicked", event.target)
    console.log("value", (event.target as HTMLInputElement). value)

  }

  handleMouseEvent(event : MouseEvent){
    console.log("Mouse Event Clicked", event.target)
  }

}
