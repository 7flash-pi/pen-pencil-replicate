import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import  { IonicStorageModule } from '@ionic/storage-angular';
import { SharedModule } from './component/shared.module';
import { InterceptorService } from './interceptor.interceptor';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule
    , IonicModule.forRoot(),
     AppRoutingModule,
     HttpClientModule,
     IonicStorageModule.forRoot(),
    SharedModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
