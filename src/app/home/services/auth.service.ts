import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public _url = 'https://oposerver.herokuapp.com/user/login';
  errorData: {} = {};
  constructor(private http: HttpClient) { }
  redirectUrl: string = '';
  login(username: string, password: string) {
    return this.http
      .post<any>(`${this._url}`, {
        username: username,
        password: password,
      })
      .pipe(
        map((user) => {
          if (user && user.user.role === "admin") {
            localStorage.setItem('currentUser', JSON.stringify(user));
          }
        }),
        catchError(this._handleError)
      );
  }
  private _handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.log(
        `Backend returned code ${error.status}` + `bode was : ${error.error}`
      );
    }
    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.',
    };
    return throwError(this.errorData);
  }
  getAuthorizationToken() {
    const newLocal = localStorage.getItem('currentUser');
    const currentUser = newLocal ? JSON.parse(newLocal) : [];
    return currentUser.token;
  }
  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    localStorage.removeItem('currentUser');
  }
}
