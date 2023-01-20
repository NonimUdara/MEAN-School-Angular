import { TestBed } from '@angular/core/testing';

import { MathscrudService } from './mathscrud.service';

describe('MathscrudService', () => {
  let service: MathscrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathscrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
