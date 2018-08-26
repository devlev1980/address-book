import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contact} from '../models/contact';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _http: HttpClient) {
  }

  getContacts(): Observable<Contact[]> {
    return this._http.get<Contact[]>('assets/contacts.json');
  }
}
