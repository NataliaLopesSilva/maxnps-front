import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { ApiInterceptorService } from '../autentication/api-interceptor.service';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {

  private readonly API = '/cursos';

  constructor(private httpClient: HttpClient) {
  }

  listarCursos() {
    return this.httpClient.get<Course[]>(this.API.concat('/listar'));
    // return [
    //   { id: 1, name: 'Programação', category: 'A', teacher: 'Natália' },
    //   { id: 2, name: 'Desenho', category: 'B', teacher: 'Daniel' },
    //   { id: 3, name: 'Matemática básica', category: 'C', teacher: 'Neilma' },
    //   { id: 4, name: 'Inglês', category: 'D', teacher: 'Rafael' },
    // ];
  }
}
