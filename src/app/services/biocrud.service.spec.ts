import { TestBed } from '@angular/core/testing';

import { BiocrudService } from './biocrud.service';

describe('BiocrudService', () => {
  let service: BiocrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiocrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
