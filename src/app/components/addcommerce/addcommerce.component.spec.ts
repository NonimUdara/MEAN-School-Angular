import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcommerceComponent } from './addcommerce.component';

describe('AddcommerceComponent', () => {
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
