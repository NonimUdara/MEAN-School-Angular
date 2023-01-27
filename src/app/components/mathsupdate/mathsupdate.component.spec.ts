import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathsupdateComponent } from './mathsupdate.component';

xdescribe('MathsupdateComponent', () => {
  let component: MathsupdateComponent;
  let fixture: ComponentFixture<MathsupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathsupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathsupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
