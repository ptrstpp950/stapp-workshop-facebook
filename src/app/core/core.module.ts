import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePL from '@angular/common//locales/pl';

import { CoreRoutingModule } from './core-routing.module';
import { AppComponent } from './components/app/app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './components/menu/menu.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { TestPageComponent } from './pages/test-page/test-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


registerLocaleData(localePL)

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuComponent,
    SignInPageComponent,
    SignUpPageComponent,
    TestPageComponent
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'pl'
    }
  ],
  bootstrap: [AppComponent]
})
export class CoreModule { }
