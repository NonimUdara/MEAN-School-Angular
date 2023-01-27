import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioupdateComponent } from './bioupdate.component';

xdescribe('BioupdateComponent', () => {
  let component: BioupdateComponent;
  let fixture: ComponentFixture<BioupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BioupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
