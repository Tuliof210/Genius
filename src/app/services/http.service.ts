import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly URL = environment.backendApi;

  constructor(private readonly http: HttpClient) {}

  handleError(err) {
    return throwError(err);
  }
  GetService(endpoint) {
    return this.http
      .get(`${this.URL}/${endpoint}`)
      .pipe(catchError(this.handleError));
  }
  PostService(endpoint, data, headers) {
    return this.http
      .post(`${this.URL}/${endpoint}`, data, {
        headers: new HttpHeaders(headers),
      })
      .pipe(catchError(this.handleError));
  }
  PutService(endpoint, data) {
    return this.http
      .put(`${this.URL}/${endpoint}`, data)
      .pipe(catchError(this.handleError));
  }
  DeleteService(endpoint) {
    return this.http
      .delete(`${this.URL}/${endpoint}`)
      .pipe(catchError(this.handleError));
  }
}
