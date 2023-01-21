import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercecrudComponent } from './commercecrud.component';

describe('CommercecrudComponent', () => {
  let component: CommercecrudComponent;
  let fixture: ComponentFixture<CommercecrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercecrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercecrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
