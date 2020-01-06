import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Separate module for NgxBootstrap
import { AppNgxBootstrapModule } from "./app-ngxbootstrap.module";

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeroComponent } from './hero/hero.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, HeroComponent, NavComponent],
  imports: [BrowserModule, AppRoutingModule, AmplifyAngularModule, FormsModule, AppNgxBootstrapModule],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
