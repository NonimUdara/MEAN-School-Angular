import { TestBed } from '@angular/core/testing';

import { ContactusService } from './contactus.service';

describe('ContactusService', () => {
  let service: ContactusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactusService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
