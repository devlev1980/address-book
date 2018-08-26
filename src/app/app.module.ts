import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import {Route, RouterModule, Routes} from '@angular/router';
import {ContactDetailsModule} from './contact-details/contact-details.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
