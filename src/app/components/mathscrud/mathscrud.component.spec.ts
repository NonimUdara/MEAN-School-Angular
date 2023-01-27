import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathscrudComponent } from './mathscrud.component';

xdescribe('MathscrudComponent', () => {
  let component: MathscrudComponent;
  let fixture: ComponentFixture<MathscrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathscrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathscrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
