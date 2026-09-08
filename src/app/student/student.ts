import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-student',
  imports: [FormsModule],
  templateUrl: './student.html',
  styleUrl: './student.css',
})
export class Student {
student = {
  name: "",
  gender: "",
  isActive: false,
  course: "",
  skills: [] as string[]
}

onSubmit(form: any){
  console.log(form.value);
  console.log(this.student);
}
}
