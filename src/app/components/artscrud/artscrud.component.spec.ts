import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtscrudComponent } from './artscrud.component';

describe('ArtscrudComponent', () => {
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
