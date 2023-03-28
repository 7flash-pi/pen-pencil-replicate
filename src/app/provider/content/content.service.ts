import { Injectable } from '@angular/core';
import { AppUrlService } from 'src/app/constant/app-url.service';
import { HttpClient} from '@angular/common/http';
import { catchError, retry, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {


  topicId = '624d595397a01500183e8232';


  constructor(private appUrl:AppUrlService,
              private http:HttpClient) { }


  getContents(programId,subjectId,chapterId,topicId,query?){
    let url=this.appUrl.TOPIC_CONTENT_LIST(programId,subjectId,chapterId,topicId);
    url = url.substr(0, url.length - 1);

    return this.http.get(url).pipe(retry(1),tap() );
}

setContent(programId,subjectId,chapterId,topicId,contentId,data?){
  return this.http.put(this.appUrl.CONTENT_COMPLETE(programId,subjectId,chapterId,topicId,contentId),data).pipe(
    retry(1)
  );

}



}
