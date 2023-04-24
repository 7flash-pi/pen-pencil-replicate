import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppUrlService } from 'src/app/constant/app-url.service';
import { StorageService } from '../stroage/storage.service';
import { GlobalService } from '../global-services/global.service';
import { BaseService } from '../base/base.service';
import { retry,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChapterService extends BaseService {

  constructor( public httpClient:HttpClient,
    private appUrl:AppUrlService,
    public  storageService:StorageService,
    private globalService:GlobalService) {
      super(httpClient,storageService);
     }

    getChapters(programId, subjectId , query?){
      let url=this.appUrl.GET_CHAPTER_LIST(programId,subjectId);
      if (!this.isEmpty(query)) {
        url = url + '?';
        for (const key in query) {
            if (query.hasOwnProperty(key)) {

                url += key + '=' + query[key] + '&';
            }
        }
        url = url.substr(0, url.length - 1);
    }
    return this.httpClient.get(url).pipe(retry(1),tap());


    }
}
