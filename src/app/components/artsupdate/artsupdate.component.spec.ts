import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsupdateComponent } from './artsupdate.component';

describe('ArtsupdateComponent', () => {
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
