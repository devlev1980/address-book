import {Component, OnInit} from '@angular/core';
import {ContactService} from '../services/contact.service';
import {Contact} from '../models/contact';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  contacts: Contact[];

  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
    this.contactService.getContacts().subscribe(res => {
      this.contacts = res.contacts;
    });
  }

}
