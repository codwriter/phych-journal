import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { baseURL } from './shared/baseurl';

import { ResourcesService } from './services/resources.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { IonicStorageModule } from '@ionic/storage';
import { UserService } from './services/user.service';
import {  JournalEntryPageModule} from "./journal-entry/journal-entry.module";

@NgModule( {
  declarations: [ AppComponent ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    JournalEntryPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProcessHTTPMsgService,
    ResourcesService,
    UserService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: 'BaseURL', useValue: baseURL }
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
