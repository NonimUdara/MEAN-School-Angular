import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsupdateComponent } from './artsupdate.component';

xdescribe('ArtsupdateComponent', () => {
  let component: ArtsupdateComponent;
  let fixture: ComponentFixture<ArtsupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtsupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtsupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
