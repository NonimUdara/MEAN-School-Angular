import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechupdateComponent } from './techupdate.component';

describe('TechupdateComponent', () => {
  let component: TechupdateComponent;
  let fixture: ComponentFixture<TechupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
