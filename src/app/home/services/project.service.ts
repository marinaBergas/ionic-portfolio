import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProjectType } from '../models/enums';
import { Project } from '../models/interfaces';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProjectService {

  errorData: any = {};
  public test = [];
  private url = `https://oposerver.herokuapp.com/project`;

  private endpointList = 'list';
  private endpointAdd = 'add';

  constructor(private http: HttpClient) {

  }
  public getProjectList(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.url}/${this.endpointList}`);
  }

  // eslint-disable-next-line max-len
  addProject(projectsTitle: string, projectDescription: string, projectImage: string, projectType: string, logoImg: string, projectUrl: string) {
    return this.http.post<any>(`${this.url}/${this.endpointAdd}`, {
      title: projectsTitle,
      description: projectDescription,
      imgscreenshot: projectImage,
      projectType,
      logoImg,
      projectUrl
    }).pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
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
}
