import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  students:any = {};

  constructor() { }

  ngOnInit() {
  }

  addStudent() {
    alert('test')
  }

}
