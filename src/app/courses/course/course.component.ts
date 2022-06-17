import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course.model';
import { CoursesService } from 'src/app/services/courses/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'categoria', 'professor'];
  dataSource: Observable<Course[]>;

  constructor(private coursesService: CoursesService){
    this.dataSource = this.coursesService.listarCursos();
  }

  ngOnInit(): void {
  }
}
