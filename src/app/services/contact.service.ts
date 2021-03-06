import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, pipe} from 'rxjs';
import {Contact} from '../models/contact';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[];

  constructor(private _http: HttpClient) {
  }

  getContacts(): Observable<Contact[]> {
    return this._http.get<Contact[]>(environment.url).pipe(map(
      (response: Response) => {
        if (response) {
          console.log('Response', response);
            return response;
          }
        return [];
      }
    ));
  }

  addContact(contact) {


    return this._http.post(environment.url, contact);

  }
}
