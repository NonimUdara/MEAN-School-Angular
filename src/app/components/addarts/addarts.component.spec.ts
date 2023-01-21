import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddartsComponent } from './addarts.component';

describe('AddartsComponent', () => {
  let component: AddartsComponent;
  let fixture: ComponentFixture<AddartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
