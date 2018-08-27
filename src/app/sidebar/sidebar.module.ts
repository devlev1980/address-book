import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import {ContactDetailsModule} from '../contact-details/contact-details.module';
import {MaterialModule} from '../material.module';
import {MatDatepickerModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    SidebarRoutingModule,
    ContactDetailsModule,
    MaterialModule
  ],
  declarations: [],
  providers: [MatDatepickerModule]

})
export class SidebarModule { }
