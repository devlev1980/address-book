import {Component, OnInit} from '@angular/core';
import {ContactService} from '../services/contact.service';
import {Contact} from '../models/contact';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  contacts: Contact[];

  constructor(private contactService: ContactService, private router: Router) {
  }

  ngOnInit() {
    this.contactService.getContacts().subscribe(res => {
      this.contacts = res;
    });
  }

  onContactDetails(contact) {
this.router.navigate(['/contact-details'])
  }

}
