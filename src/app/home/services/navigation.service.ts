import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private _navigations = [
    {
      id: 1,
      service: 'HTML5',
    },
    {
      id: 2,
      service: 'CSS3',
    },
    {
      id: 3,
      service: 'jQuery',
    },
    {
      id: 4,
      service: 'bootstrap',
    },
    {
      id: 5,
      service: 'javascript',
    },
  ];
  public get navigations() {
    // eslint-disable-next-line no-underscore-dangle
    return this._navigations;
  }

  constructor() {}
}
