import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
name: string = "welcome in angular 21 version"
today:Date = new Date()
pi:number = 3.1467882
}
