import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
  tasksList: Tarea[] = []
  taskName = ""
  
  addTask() {
    console.log(this.tasksList)

    const task: Tarea = {
      name: this.taskName,
      state: false
    }
    if (this.taskName !== "") {
      this.tasksList.push(task)
    }

    this.taskName = ""
  }
}
  