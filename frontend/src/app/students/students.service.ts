import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { of } from "rxjs";
import * as env from '../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class StudentsService {

	constructor(private http:HttpClient){
		console.log(env.api);
	}

	getAllStudents() {
		return this.http.get<any>(env.api+'students').pipe(map(
            data => {
                return data;
            }
        ))
	}

	getStudent(id) {
		return this.http.get<any>(env.api+'students/?_id='+id).pipe(map(
            data => {
                return data;
            }
        ))
	}

	createStudent(data) {
		return this.http.post<any>(env.api+'students', data).pipe(map(
            data => {
                return data;
            }
        ))
	}

	deleteStudent(id){
		return this.http.delete<any>(env.api+'students/'+id).pipe(map(
            data => {
                return data;
            }
        ))
	}

	editStudent(student) {
		return this.http.put<any>(env.api+'students/'+student._id, student).pipe(map(
            data => {
                return data;
            }
        ))
	}
}