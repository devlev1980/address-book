import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactDetailsRoutingModule } from './contact-details-routing.module';
import {ContactDetailsComponent} from './contact-details.component';

@NgModule({
  imports: [
    CommonModule,
    ContactDetailsRoutingModule
  ],
  exports: [ContactDetailsModule],
  declarations: [ContactDetailsComponent]
})
export class ContactDetailsModule { }
