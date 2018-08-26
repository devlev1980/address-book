export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  age: number;
  birthday: string;
  homePhone: number;
  mobilePhone: number;
  facebookLink: string;
}
export interface Contacts {
  contacts: Contact[];

}
