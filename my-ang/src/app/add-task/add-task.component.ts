import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/functions';
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

  constructor(public functions: AngularFireFunctions) {
  }

  ngOnInit(): void {
  }

  async createNewData(){
    console.log(this.email);
    console.log(this.password);

    const saveTask = this.functions.httpsCallable('storeData');

    try{
      const result = await saveTask({ Email: this.email, Password: this.password}).toPromise();

      console.log("Successfully created the task");
      console.log(result);
    } catch (error) {
      console.error("Error", error);
      }
    }
  }

