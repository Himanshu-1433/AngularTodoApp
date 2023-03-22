import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-himanshu',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class MyComponent {
  listUserTask: any[] = [];
  addTask(value: string) {
    this.listUserTask.push({ id: this.listUserTask.length, task: value })
    console.log(this.listUserTask);
  }
  removeTask(id: Number) {
    this.listUserTask = this.listUserTask.filter(i => i.id !== id);
  }
  doneTask(id: Number) {
    taskUser : String;
    console.log()
  }
}
