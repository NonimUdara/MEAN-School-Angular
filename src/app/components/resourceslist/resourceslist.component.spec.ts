import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceslistComponent } from './resourceslist.component';

describe('ResourceslistComponent', () => {
  let component: ResourceslistComponent;
  let fixture: ComponentFixture<ResourceslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
