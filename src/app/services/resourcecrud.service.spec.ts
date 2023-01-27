import { TestBed } from '@angular/core/testing';

import { ResourcecrudService } from './resourcecrud.service';

describe('ResourcecrudService', () => {
  let service: ResourcecrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResourcecrudService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
