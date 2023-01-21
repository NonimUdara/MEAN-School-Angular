import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercelistComponent } from './commercelist.component';

describe('CommercelistComponent', () => {
  let component: CommercelistComponent;
  let fixture: ComponentFixture<CommercelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
