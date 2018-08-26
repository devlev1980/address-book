import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import {ContactDetailsModule} from '../contact-details/contact-details.module';

@NgModule({
  imports: [
    CommonModule,
    SidebarRoutingModule,
    ContactDetailsModule
  ],
  declarations: []
})
export class SidebarModule { }
