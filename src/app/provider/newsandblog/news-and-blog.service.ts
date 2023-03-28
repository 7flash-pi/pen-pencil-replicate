import { Injectable } from '@angular/core';
import { AppUrlService } from 'src/app/constant/app-url.service';

@Injectable({
  providedIn: 'root'
})
export class NewsAndBlogService {

  constructor(private appUrl:AppUrlService) {


  }
}
