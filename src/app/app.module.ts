import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FoodieApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ModalPage } from '../pages/modal/modal';
import { ModalPageModule } from '../pages/modal/modal.module';
import { ProductPageModule } from '../pages/product/product.module';
import { ProductPage } from '../pages/product/product';

@NgModule({
  declarations: [
    FoodieApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ModalPageModule,
    ProductPageModule,
    IonicModule.forRoot(FoodieApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    FoodieApp,
    HomePage,
    ModalPage,
    ProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
