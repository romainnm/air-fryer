import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http'

const modules = [
  HttpClientModule
]

const components = [
  HomeComponent
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...modules,
    ...components
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
