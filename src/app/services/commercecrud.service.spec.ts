import { TestBed } from '@angular/core/testing';

import { CommercecrudService } from './commercecrud.service';

describe('CommercecrudService', () => {
  let service: CommercecrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommercecrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
