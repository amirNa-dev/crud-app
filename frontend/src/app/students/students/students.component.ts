import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students:any;

  constructor(private router:Router) { }

  ngOnInit() {
    this.students = [1,2,3,4,5];
  }

  goToNew() {
    this.router.navigate(['students/new']);
  }

  goToEdit(id) {
    this.router.navigate(['students/edit/'+id]);
  }

}
