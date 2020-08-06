import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  students:any = {};

  constructor(private studentsService:StudentsService, private router:Router) { }

  ngOnInit() {
  }

  addStudent() {
    this.studentsService.createStudent(this.students).subscribe((data)=>{
      alert('Saved successfully.');
      this.router.navigate(['students']);
    }, err=>{ 
      alert('Error Occured. Check the email format.')
    });
  }

}
