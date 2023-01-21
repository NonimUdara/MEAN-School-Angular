import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathsupdateComponent } from './mathsupdate.component';

describe('MathsupdateComponent', () => {
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
