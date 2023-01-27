import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathslistComponent } from './mathslist.component';

xdescribe('MathslistComponent', () => {
  let component: MathslistComponent;
  let fixture: ComponentFixture<MathslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
