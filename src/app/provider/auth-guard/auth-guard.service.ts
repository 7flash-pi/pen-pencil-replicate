import { Injectable } from '@angular/core';
import { GlobalService } from '../global-services/global.service';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService   {

  constructor( private globalService:GlobalService,
      private router :Router,
      private navController:NavController,
      private platform:Platform) { }

      canActivate(
        next:ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ):Observable<boolean> | Promise<boolean> | boolean{

        return this.checkLogin(state.url);
      }

      canLoad(route:Route):boolean{

        return this.checkLogin(`/${route.path}`);

      }

      canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {


        return this.canActivate(next, state);
    }


      checkLogin(url:string){
        if(this.globalService.isLoggedIn){
          return true;
        }
        this.globalService.redirectUrl=url;
        this.navController.setDirection['root'];
        return false;
      }

}
