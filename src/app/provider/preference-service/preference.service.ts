import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../stroage/storage.service';
import { GlobalService } from '../global-services/global.service';

@Injectable({
  providedIn: 'root'
})
export class PreferenceService  extends BaseService{

  constructor(
    public httpClient:HttpClient,
    public storageService:StorageService,
    private globalService:GlobalService
  ) {
    super(httpClient,storageService)
  }
  getPreference(query?){

  }
}
