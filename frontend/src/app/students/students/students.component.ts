import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students:any;
  studentsCopy:any;
  filter:any = {};

  constructor(private router:Router, private studentsService:StudentsService) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.studentsService.getAllStudents().subscribe((data)=>{
      this.students = data.students;
      this.studentsCopy = data.students;
    })
  }

  goToNew() {
    this.router.navigate(['students/new']);
  }

  goToEdit(student) {
    this.router.navigate(['students/edit/'+student._id]);
  }

  deleteStudent(student) {
    var r = confirm("Are you sure you want to delete?");
    if (r == true) {
      this.studentsService.deleteStudent(student._id).subscribe((data)=>{
        this.init();
      })
    }
  }

  onRoleChanged(){
    this.students = this.studentsCopy;
    if (this.filter.role == 'All' || this.filter.role == '') {
      return;
    }
    this.students = this.students.filter((item)=>{
      return item.role == this.filter.role;
    });
  }

}
