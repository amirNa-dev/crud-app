import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students/students.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { MyFilterPipe } from './students.pipe';

@NgModule({
  declarations: [StudentsComponent, NewStudentComponent, EditStudentComponent, MyFilterPipe],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule
  ]
})
export class StudentsModule { }
