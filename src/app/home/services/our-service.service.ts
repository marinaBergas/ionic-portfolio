import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OurServiceService {
  private _ourServiceList = [
    {
      id: 1,
      service: 'web design',
    },
    {
      id: 2,
      service: 'eCommerce',
    },
    {
      id: 3,
      service: 'word press',
    },
    {
      id: 4,
      service: 'front end',
    },
  ];
  public get ourServiceList() {
    // eslint-disable-next-line no-underscore-dangle
    return this._ourServiceList;
  }

  constructor() {}
}
