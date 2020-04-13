import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from 'src/app/favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title : 'Angular App',
    assigne: null,
    isFavorite: true
  };

  canSave = false;

  courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'},
    { id: 4, name: 'course4'}
   ];
  viewmode = 'map';
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite Changed', eventArgs);
  }
  onAdd() {
    this.courses.push({ id: 5, name: 'course5'});
  }
  onRemove(course) {
    this.courses = this.courses.filter(x => x !== course);
  }
}
