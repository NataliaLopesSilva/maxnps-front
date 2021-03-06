import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseComponent } from './course/course.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [CourseComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatButtonModule,
    MatTableModule
  ],
})
export class CoursesModule {}
