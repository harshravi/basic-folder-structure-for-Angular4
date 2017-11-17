import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
// import { HttpInterceptor } from './config/HTTP';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { ButtonComponent } from './components/core/button/button.component';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './features/home/home.module';
import { HeaderComponent } from './components/core/header/header.component';
import { SideNavComponent } from './components/core/side-nav/side-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonComponent,
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    HttpModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
