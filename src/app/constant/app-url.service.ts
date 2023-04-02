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

  public TOPIC_CONTENT_LIST(programId, subjectId, chapterId, topicContentId) {
    return this.APP_URL_V1 + `programs/${programId}/subjects/${subjectId}/chapters/${chapterId}/topics/${topicContentId}/contents`;
  }

  public CONTENT_COMPLETE(programId, subjectId, chapterId, topicId, contentId) {
    return this.APP_URL_V1 + `programs/${programId}/subjects/${subjectId}/chapters/${chapterId}/topics/${topicId}/contents/${contentId}/complete`;
  }

  //logjn
  public get LOGIN() {
    return this.APP_URL_V1 + 'oauth/token';
  }

  //notification
  public get GET_NOTIFICATION() {
    return this.APP_URL_V1 + 'notification';
  }
  public GET_NOTIFICAION_METADATA(campaignId: string) {
    return this.APP_URL_V1 + `notification/${campaignId}/campaign-meta-details`;
}
  public get READ_NOTIFICATION() {
    return this.APP_URL_V1 + 'notification/mark-read';
  }

  //auth
  public get SET_FCM_TOKEN() {
    return this.APP_URL_V1 + 'devices';
  }
  public get LOGOUT() {
    return this.APP_URL_V1 + 'oauth/logout';
  }


}
