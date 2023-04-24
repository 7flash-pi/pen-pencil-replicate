import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { StorageService } from '../stroage/storage.service';
import { HttpClient } from '@angular/common/http';
import { AppUrlService } from 'src/app/constant/app-url.service';
import { retry, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicsService extends BaseService{

  constructor(
    public storageService:StorageService,
    public httpClient:HttpClient,
    private appUrl:AppUrlService
  ) {
    super(httpClient,storageService)
  }

  getTopics(programId,subjectId,chapterId,query?){

    let url=this.appUrl.GET_TOPICS(programId,subjectId,chapterId);

      if (!this.isEmpty(query)) {
        url = url + '?';
        for (const key in query) {
            if (query.hasOwnProperty(key)) {

                url += key + '=' + query[key] + '&';
            }
        }
        url = url.substr(0, url.length - 1);
    }
    return this.httpClient.get(url).pipe( retry(1) ,tap());

  }
}
