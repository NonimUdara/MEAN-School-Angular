import { TestBed } from '@angular/core/testing';

import { TechcrudService } from './techcrud.service';

describe('TechcrudService', () => {
  let service: TechcrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechcrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
