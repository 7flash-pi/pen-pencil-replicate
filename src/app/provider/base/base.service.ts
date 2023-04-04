import { from } from "rxjs/internal/observable/from";
import { retry, tap } from "rxjs/operators";


export class BaseService {

    httpClient;
    storageService;

    constructor(httpClient,storageService) {
        this.httpClient = httpClient;
        this.storageService= storageService;
    }

    isEmpty(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }
    isHasValue(url) {
      const data = this.storageService.getLocalData(url);
      return !!data;
  }
  getFromLocal(url) {
    return from(this.storageService.getData(url)).pipe(
        tap(
            () => {
                this.setFromServer(url);
            }
        )
    );
}

getFromServer(url) {
    return this.httpClient.get(url).pipe(
        retry(1),
        tap(
            res => {
                this.setStorageValue(url, res);
            },
            err => {
            }
        )
    );
}

setStorageValue(url,data){
  this.storageService.setData(url,data);
}

setFromServer(url){
  this.httpClient.get(url).subscribe(
    res => {
        this.setStorageValue(url, res);
    }
);

}

}

