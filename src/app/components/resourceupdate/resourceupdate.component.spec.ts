import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceupdateComponent } from './resourceupdate.component';

describe('ResourceupdateComponent', () => {
  let component: ResourceupdateComponent;
  let fixture: ComponentFixture<ResourceupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
