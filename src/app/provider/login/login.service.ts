import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, debounceTime, Observable } from 'rxjs';
import { ORGANIZATION_ID } from 'src/app/constant/global-contant-services';
import { AppUrlService } from 'src/app/constant/app-url.service';
import { hasShadowDom } from '@ionic/core/dist/types/utils/helpers';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient,
              private appUrl:AppUrlService) { }

  login(user): Observable<any> {
    const details = {
      username: user.mobile,
      password: user.password,
      client_id: 'system-admin',
      client_secret: 'KjPXuAVfC5xbmgreETNMaL7z',
      grant_type: 'password',
      organizationId: ORGANIZATION_ID
  };
    return this.httpClient.post(this.appUrl.LOGIN,details).pipe(
      debounceTime(500),
    );
  }
}
