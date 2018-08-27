export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  birthday: string;
  homePhone: number;
  mobilePhone: number;
  address: {
    street: string,
    apartment: number,
    city: string,
    country: string
  };
  facebookLink: string;
  linkedInLink: string;
  googleLink: string;
  gitHubLink: string;
}

export interface Contacts {
  contacts: Contact[];

}
