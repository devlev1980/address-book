import { ContactDetailsModule } from './contact-details.module';

describe('ContactDetailsModule', () => {
  let contactDetailsModule: ContactDetailsModule;

  beforeEach(() => {
    contactDetailsModule = new ContactDetailsModule();
  });

  it('should create an instance', () => {
    expect(contactDetailsModule).toBeTruthy();
  });
});
