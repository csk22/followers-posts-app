import { NotFoundError } from './../common/not-found-error';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { AppError } from 'src/app/common/app-error';
import { BadInput } from 'src/app/common/bad-input';

export class DataService {
  constructor(private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
    .pipe(map(response => response), catchError(this.errorHandler));
  }

  create(resource): Observable<any> {
    return this.http.post(this.url, resource)
      .pipe(map(response => response), catchError(this.errorHandler));
  }

  update(resource) {
    return this.http
      .patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true}))
      .pipe(map(response => response), catchError(this.errorHandler));
  }

  delete(id): Observable<any> {
    // return throwError(new AppError());
    return this.http.delete(this.url + '/' + id)
    .pipe(map(response => response), catchError(this.errorHandler));
  }

  private errorHandler(error: HttpErrorResponse) {
    if (error.status === 404) {
      return throwError(new NotFoundError(error));
    } else if (error.status === 400) {
        return throwError(new BadInput(error));
    }
    return throwError(new AppError(error));
  }
}
