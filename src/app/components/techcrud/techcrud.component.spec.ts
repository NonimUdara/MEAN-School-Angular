import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechcrudComponent } from './techcrud.component';

describe('TechcrudComponent', () => {
  let component: TechcrudComponent;
  let fixture: ComponentFixture<TechcrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechcrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
