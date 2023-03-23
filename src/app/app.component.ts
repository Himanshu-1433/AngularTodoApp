import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-himanshu',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class MyComponent {
  btnStatus: String = "btn-outline-primary";
  inputVal: String = "";
  styleOfinput: String = "background: transparent; text-align:center; outline: none; border: none;";
  listUserTask: Array<{ id: number, task: String , Isdis : Boolean }> = [];
  addTask() {
    if (this.inputVal == "" || this.inputVal == " ") {
      alert("please enter some task");
    }
    else {
      this.listUserTask.push({ id: this.listUserTask.length, task: this.inputVal , Isdis: true})
      console.log(this.listUserTask);
      this.inputVal = "";
    }
  }
  removeTask(id: Number) {
    this.listUserTask = this.listUserTask.filter(i => i.id !== id);
  }
  editable(id : Number) {
    console.log(id);
    this.listUserTask.map((array ,index) => {
      if(index == id) {
        array.Isdis = !array.Isdis;
      }
      return array;
    }); 
  }
  done(id : Number) {
    this.listUserTask.map((arrEle , index) => {
      
    })    
    console.log("clicked");
  }
}
