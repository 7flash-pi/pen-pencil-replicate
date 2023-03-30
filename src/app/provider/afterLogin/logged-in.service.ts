import { Injectable } from '@angular/core';
import { GlobalService } from '../global-services/global.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInService {

  constructor(private globalService:GlobalService,
    private loginService:LoginService,
    private router:Router,
    private navController:NavController,
    private loader:LoadingService) { }

    afterLoginProcess(res){
      this.globalService.isLoggedIn=true;
      this.globalService.setAccessToken(res['data']['refresh_token']);
      this.globalService.setUser(res['data']['user']);
      let redirectPath='home';
      this.navController.navigateRoot(redirectPath).then( () =>{
        this.loader.unloadData();
      })

      this.globalService.showToast('Logged In SuccessFully',1000,'bottom');
    }
}
