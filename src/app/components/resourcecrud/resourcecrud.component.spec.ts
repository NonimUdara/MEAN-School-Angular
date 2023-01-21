import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcecrudComponent } from './resourcecrud.component';

describe('ResourcecrudComponent', () => {
  let component: ResourcecrudComponent;
  let fixture: ComponentFixture<ResourcecrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcecrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcecrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
