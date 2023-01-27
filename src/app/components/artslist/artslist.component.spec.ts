import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtslistComponent } from './artslist.component';

xdescribe('ArtslistComponent', () => {
  let component: ArtslistComponent;
  let fixture: ComponentFixture<ArtslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
