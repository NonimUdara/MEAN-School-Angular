import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerceupdateComponent } from './commerceupdate.component';

describe('CommerceupdateComponent', () => {
  let component: CommerceupdateComponent;
  let fixture: ComponentFixture<CommerceupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommerceupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommerceupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
