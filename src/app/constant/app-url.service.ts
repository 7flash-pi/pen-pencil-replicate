import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ORGANIZATION_ID } from './global-contant-services';

@Injectable({
  providedIn: 'root'
})
export class AppUrlService {

  constructor() { }

  public get APP_URL_V1() {
    return environment.BASE_URL_V1;
  }

  public get PUBLIC_NEWS(): string {
    return this.APP_URL_V1 + `news/${ORGANIZATION_ID}/list`;
}
}
