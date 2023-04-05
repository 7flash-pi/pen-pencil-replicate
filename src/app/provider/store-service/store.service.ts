import { Injectable } from '@angular/core';
import { AppUrlService } from 'src/app/constant/app-url.service';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../stroage/storage.service';
import { tap,retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService  extends BaseService{

  constructor(
    private appUrl:AppUrlService,
    public httpClient:HttpClient,
    public storageService:StorageService
  ) {
    super(httpClient,storageService)
  }

  getOrders(query) {
    let url = this.appUrl.ORDERS;

    if (!this.isEmpty(query)) {
        url = url + '?';
        for (const key in query) {
            if (query.hasOwnProperty(key)) {

                url += key + '=' + query[key] + '&';
            }
        }
        url = url.substr(0, url.length - 1);
    }
    return this.httpClient.get(url).pipe(retry(1), tap());

}
}
