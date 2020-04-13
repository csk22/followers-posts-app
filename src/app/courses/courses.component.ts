import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  // courses = ['course1', 'course2', 'course3'];
  email = 'me@example.com';
  constructor(private _cs: CourseService) { }

  title = 'List of courses';
  // tslint:disable-next-line:max-line-length
  text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.';
  courses = this._cs.courses;
  imageUrl = 'http://lorempixel.com/400/200';
  colSpan = 2;
  isActive = false;
  ngOnInit() {
  }

  onSave($event) {
    console.log('Button was clicked!!', $event);
  }

  onKeyUp() {
     console.log(this.email);
  }

}
