import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  Students: any[] = [
    {
      'name': 'shivam'
    },
    {
      'name': 'shivam Goyal'
    },
    {
      'name': 'goyal'
    },
  ];

  @ViewChild('form') form: NgForm;
    email: string
    password: string
  constructor() {

  }

  ngOnInit(): void {
  }

  async createNewData(){
    console.log(this.email);
    console.log(this.password);
    console.log("hello");
  }

}
