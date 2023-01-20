import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiolistComponent } from './biolist.component';

describe('BiolistComponent', () => {
  let component: BiolistComponent;
  let fixture: ComponentFixture<BiolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiolistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
