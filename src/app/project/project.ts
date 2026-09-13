import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from '../reverse-pipe';

@Component({
  selector: 'app-project',
  imports: [CommonModule,ReversePipe ],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class Project {
name: string = "welcome in angular 21 version"
today:Date = new Date()
pi:number = 3.1467882
}
