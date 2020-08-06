import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

	students:any = {};
	id:string;

  constructor(private studentsService:StudentsService, private activatedRoute:ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	this.id = this.activatedRoute.snapshot.params['id'];
  	this.studentsService.getStudent(this.id).subscribe((data)=>{
  		this.students = data.students[0];
  	})
  }

  editStudent() {
    this.studentsService.editStudent(this.students).subscribe((data)=>{
      alert('Saved successfully.');
      this.router.navigate(['students']);
    }, err=>{ 
      alert('Error Occured. Check the email format.')
    });
  }

}
