import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbioComponent } from './addbio.component';

xdescribe('AddbioComponent', () => {
  let component: AddbioComponent;
  let fixture: ComponentFixture<AddbioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddbioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
