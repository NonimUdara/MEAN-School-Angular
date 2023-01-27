import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtechComponent } from './addtech.component';

xdescribe('AddtechComponent', () => {
  let component: AddtechComponent;
  let fixture: ComponentFixture<AddtechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
