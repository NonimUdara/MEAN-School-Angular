import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcommerceComponent } from './addcommerce.component';

xdescribe('AddcommerceComponent', () => {
  let component: AddcommerceComponent;
  let fixture: ComponentFixture<AddcommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcommerceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
