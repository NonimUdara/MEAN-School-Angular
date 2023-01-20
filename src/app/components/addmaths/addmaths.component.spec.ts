import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmathsComponent } from './addmaths.component';

describe('AddmathsComponent', () => {
  let component: AddmathsComponent;
  let fixture: ComponentFixture<AddmathsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmathsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
