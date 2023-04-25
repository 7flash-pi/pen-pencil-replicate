import { Injectable } from '@angular/core';
import { AppUrlService } from 'src/app/constant/app-url.service';
import { GlobalService } from '../global-services/global.service';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class McqService  {

  constructor(private appUrl:AppUrlService,
    private globalService:GlobalService,
    private httpClient:HttpClient) {

     }

     getMCQs(){
      let url=this.appUrl.GET_MCQS();

      return this.httpClient.get(url).pipe(
        retry(1),
      )

     }
}
