import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtscrudComponent } from './artscrud.component';

xdescribe('ArtscrudComponent', () => {
  let component: ArtscrudComponent;
  let fixture: ComponentFixture<ArtscrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtscrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtscrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
