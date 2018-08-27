import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  contactInDB: Contact;
  newContact: Contact;
  @ViewChild('inputFirstName') firstName: ElementRef;
  @ViewChild('inputLastName') lastName: ElementRef;
  @ViewChild('inputUserName') userName: ElementRef;
  @ViewChild('inputEmail') email: ElementRef;
  @ViewChild('inputBirthday') birthday: ElementRef;
  @ViewChild('inputHomePhone') homePhone: ElementRef;
  @ViewChild('inputMobilePhone') mobilePhone: ElementRef;
  @ViewChild('inputAddressStreet') street: ElementRef;
  @ViewChild('inputAddressCity') city: ElementRef;
  @ViewChild('inputAddressApartment') apartment: ElementRef;
  @ViewChild('inputAddressCountry') country: ElementRef;
  @ViewChild('inputFacebook') facebook: ElementRef;
  @ViewChild('inputLinked') linkedIn: ElementRef;
  @ViewChild('inputGoogle') google: ElementRef;
  @ViewChild('inputGithub') github: ElementRef;

  constructor(private contactService: ContactService, private router: Router) {
  }

  ngOnInit() {
    this.contactService.getContacts().subscribe(res => {
      console.log(res);
      this.contacts = res;

    });
  }

  onContactDetails(contact) {
    this.contactInDB = contact;
    this.firstName.nativeElement.value = this.contactInDB.firstName;
    this.lastName.nativeElement.value = this.contactInDB.lastName;
    this.userName.nativeElement.value = this.contactInDB.userName;
    this.email.nativeElement.value = this.contactInDB.email;
    this.birthday.nativeElement.value = this.contactInDB.birthday;
    this.homePhone.nativeElement.value = this.contactInDB.homePhone;
    this.mobilePhone.nativeElement.value = this.contactInDB.mobilePhone;
    this.street.nativeElement.value = this.contactInDB.address.street;
    this.apartment.nativeElement.value = this.contactInDB.address.apartment;
    this.city.nativeElement.value = this.contactInDB.address.city;
    this.country.nativeElement.value = this.contactInDB.address.country;
    this.facebook.nativeElement.value = this.contactInDB.facebookLink;
    this.linkedIn.nativeElement.value = this.contactInDB.linkedInLink;
    this.google.nativeElement.value = this.contactInDB.googleLink;
    this.github.nativeElement.value = this.contactInDB.gitHubLink;


  }

  onSubmit(firstName, lastName, userName, email, birthday, homePhone, mobilePhone, street, apartment, city, country, facebookLink, linkedInLink, googleLink, gitHubLink) {
    const newContact = {
      firstName,
      lastName,
      userName,
      email,
      birthday,
      homePhone,
      mobilePhone,
      street,
      apartment,
      city,
      country,
      facebookLink,
      linkedInLink,
      googleLink,
      gitHubLink
    };
    // this.contactService.addContact(newContact).subscribe(res => {
    //   console.log(res);
    // });
    // this.onContactDetails(form);
  }

}
